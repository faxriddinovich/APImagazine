import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getData, getCategories, getByCategory, searchItem, getDataByPage,getFirstData } from '../Reducer/Reducer'
import { FaSistrix } from "react-icons/fa";
import './style.css'
import Content from './Content';
import './responsive.css'

function Home({getData,getCategories,getByCategory,searchItem,getDataByPage,categoryNames,number}) {
    
    const [search,setSearch]=useState('')
    const [categoryName,setCategoryName]=useState('')
    
    function changeName(name){
        if(name==="all"){
            getData()
            getDataByPage({category:'',page:0})
        }
        else{
            getByCategory(name)
            getDataByPage({category:name,page:0})
        }
    }

    function findItem(event){
        event.preventDefault()
        searchItem(search)
        setSearch("")
    }
    
    function searchOnChange(word){
        setSearch(word)
        searchItem(word)
    }

    useEffect(()=>{
        getData()
        getDataByPage({category:'',page:0})
        getCategories()
    },[])
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='home-wrapper'>
                    <div className='forms'>
                        <form className='toSearch'>
                            <input type="text" className='search-bar' placeholder='Search item' value={search} onChange={(e)=>searchOnChange(e.target.value)}/>
                            <button onClick={findItem} type="submit">
                                <FaSistrix/>
                            </button>
                        </form>
                        <form className='toFilter' onChange={(e)=>changeName(e.target.value)}>
                            <select onChange={(e)=>setCategoryName(e.target.value)}>
                                <option value="all" >All</option>
                                {categoryNames.map((item,index)=><option value={item} key={index}>{item}</option>)}
                            </select>
                        </form>
                    </div>
                </div>
                <Content categoryName={categoryName}/>
            </div>
        </div>
    </div>
  )
}

export default connect(state=>({categoryNames:state.users.category,number:state.users.page}),{getData,getCategories,getByCategory,searchItem,getDataByPage})(Home)