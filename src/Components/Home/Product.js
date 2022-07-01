import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getOneProduct } from '../Reducer/Reducer'
import './responsive.css'
import './style.css'

function Product({data,getOneProduct}) {
  useEffect(()=>{
    let ID=localStorage.getItem("oneProductID")
    getOneProduct(ID)
  },[])
    return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                {data ? <div className='one-box'>
                    <div className='images'>
                        <div className='body'>
                            <img src={data.thumbnail} alt="Logo" />
                        </div>
                        <div className='footer-img'>
                            {data.images.map((item,index)=><img src={item} alt="Brend logo" key={index} className='rounded' />)}
                        </div>
                    </div>
                    <div className='about-product'>
                        <ul className='productinform'>
                            <li>
                                <h4><strong>Brand</strong>:{data.brand}</h4>
                            </li>
                            <li>
                                <h4><strong>Title</strong>:{data.title}</h4>
                            </li>
                            <li>
                                <h4><strong>Category</strong>:{data.category}</h4>
                            </li>
                            <li> 
                                <h4><strong>Description</strong>:<p>{data.description}</p></h4>
                            </li>
                            <li>
                                <h4><strong>Dis. percentage</strong>:{data.discountPercentage}</h4>
                            </li>
                            <li>
                                <h4><strong>Price</strong>:{data.price}</h4>
                            </li>
                            <li><h4><strong>Rating</strong>:{data.rating}</h4></li>
                            <li>
                                <h4><strong>Stock</strong>:{data.stock}</h4>
                            </li>
                        </ul>
                    </div>
                </div> : ""}
            </div>
        </div>
    </div>
  )
}

export default connect(state=>({data:state.users.item}),{getOneProduct})(Product)