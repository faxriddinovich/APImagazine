import axios from "axios";

export const request=({dispatch})=>(next)=>(action)=>{
    if(action.type!=="getData/hammol"){
        next(action)
        return
    }
    next(action)
    if(action.payload){
        axios({
            mainURL:"http://localhost:3001",
            url:"http://localhost:3001"+ action.payload.URL,
            data:action.payload.data,
            method:action.payload.method
        }).then(res=>{
            dispatch({type:action.payload.onSuccess,payload:res.data})
        }).catch(err=>{
            console.log(err)
        })
    }
}