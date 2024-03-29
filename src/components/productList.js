import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './productlist.css'
const ProductList = () => {
    const [data,setData]=useState([])

    useEffect(()=>{

        const fetchedData=async()=>{
          try{
            const response=await axios.get("https://fakestoreapi.com/products")            
            console.log(response.data)
            if(response.status===200){
                setData(response.data)
            }
        }
        catch (error){
            console.log(`Error fetching ${error.message}`)
        }

        }
        fetchedData()
    },[])

  return (
    <div>
    <div className='bg-container'>
        <h1 className='heading'>Different types of Products</h1>
        <ul className='list_of_products'>
            {data.map((product,index)=>(
                <Link className="link" to={`/products/${product.id}`}>
                    <li key={index} className='list-item'>
                        <h2 className='title'>{product.title}</h2>
                       <div className='image'> <img className='img' src={product.image} alt="image_url"/></div>
                    </li>
                </Link>
            ))}
        </ul>
    </div>
    </div>
  )
}

export default ProductList