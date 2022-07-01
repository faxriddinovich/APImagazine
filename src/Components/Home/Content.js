import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getData, getByCategory, getOneProduct,getDataByPage, getFirstData } from '../Reducer/Reducer'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Content({state,getOneProduct,number,getDataByPage,categoryName,getFirstData}) {    
    const [pageNumber,setPageNumber]=useState(0)
    const [disabled,setDisabled]=useState({disableForPrev:true,disableForNext:false})
    
    let navigate = useNavigate();
    function getItem(ID){
        getOneProduct(ID)
        localStorage.setItem('oneProductID',ID)
        navigate(`/api/product/${ID}`)
    }

    function changePage(pageId){
        if(pageId==='prev'){
            setPageNumber(pageNumber-1)
        }
        else if(pageId==='next'){
            setPageNumber(pageNumber+1)
        }
        else{

        }
        getDataByPage({category:categoryName,page:pageNumber+3})
        const obj=disabled
        if(pageNumber<=0){
            obj.disableForPrev=!disabled.disableForPrev
            setDisabled(obj)
        }
        else if(pageNumber>=4){
            obj.disableForNext=!disabled.disableForNext
            setDisabled(obj)
        }
    }
    function changeByNumber(id){
        getDataByPage({category:categoryName,page:id+3})
        setPageNumber(id)
        alert(id)
    }
    useEffect(()=>{
        getDataByPage({category:'',page:0})
    },[])
  return (
    <>
        <div className='row'>
            { state.map(item=><div className='col-md-4' key={item.id}>
                <div className='product-box'>
                    <div className='image'>
                        <img src={item.thumbnail} alt="Logo" />
                    </div>
                    <div className='description'>
                        <h3 className='title'>
                            Title:{item.title}
                        </h3>
                        <h3 className='decrp'>
                            Description:{item.description}
                        </h3>
                    </div>
                    <div className='footer'>
                        <button className='moreBtn' onClick={()=>getItem(item.id)}>
                            See more
                        </button>
                    </div>
                </div>
            </div>)}
            <div className='col-md-12 col-s-12 borderer'>
                <div className='pagination'>
                    <button type="button" onClick={()=>changePage("prev")} disabled={disabled.disableForPrev}>
                        <FaAngleLeft/>
                    </button>
                    {number.map(item=><button key={item} onClick={()=>changeByNumber(item-1)}>{item}</button>)}
                    <button type='button' onClick={()=>changePage("next")} disabled={disabled.disableForNext}>
                        <FaAngleRight/>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default connect(state=>({state:state.users.products,number:state.users.page}),{getData,getByCategory,getOneProduct,getDataByPage,getFirstData})(Content)
