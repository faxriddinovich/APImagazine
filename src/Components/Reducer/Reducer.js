import { createSlice } from "@reduxjs/toolkit";
import { action } from "../Action/Action";

const initialState={
    products:[],
    category:[],
    item:"",
    page:[]
}
const Reducer=createSlice({
    name:"getData",
    initialState,    
    reducers:{
        getData:(state,action)=>{
            state.page=[]
            for(let i=1; i<=Math.ceil(action.payload.products.length/3);i++){
                state.page.push(i)
            }
        },
        getFirstData:(state,action)=>{
            
            for(let i=0; i<3; i++){
                state.products.push(action.payload.products[i])
            }
        },
        getCategories:(state,action)=>{
            state.category=action.payload
        },
        getOneProduct:(state,action)=>{
            state.item=action.payload
            console.log(state.item)
        },
        filterItem:(state,action)=>{
            state.products=action.payload.products
        },
        getProductsByCategory:(state,action)=>{
            state.products=action.payload.products
            state.page=[]
            for(let i=1; i<=Math.ceil(action.payload.products.length/3);i++){
                state.page.push(i)
            }
        },
        getPagenationData:(state,action)=>{
            state.products=action.payload.products
        }
    }

})
export const getData=()=>action({
    URL:"/api/product",
    method:"GET",
    onSuccess:Reducer.actions.getData.type
})
export const getFirstData=()=>action({
    URL:"/api/product",
    method:"GET",
    onSuccess:Reducer.actions.getFirstData.type
})
export const getCategories=()=>action({
    URL:"/api/category",
    method:"GET",
    onSuccess:Reducer.actions.getCategories.type
})
export const getOneProduct=(data)=>action({
    URL:`/api/product/${data}`,
    method:"GET",
    onSuccess:Reducer.actions.getOneProduct.type
})
export const searchItem=(data)=>action({
    URL:`/api/product?name=${data}`,
    method:"GET",
    onSuccess:Reducer.actions.filterItem.type
})
export const getByCategory=(data)=>action({
    URL:`/api/product?category=${data}`,
    method:"GET",
    onSuccess:Reducer.actions.getProductsByCategory.type
})
export const getDataByPage=(data)=>action({
    URL:`/api/product?name=e&category=${data.category}&limit=3&offset=${data.page}`,
    method:"GET",
    onSuccess:Reducer.actions.getPagenationData.type
})
export default Reducer.reducer
