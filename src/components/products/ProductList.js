import React, { useContext, useEffect } from "react"
import "./location.css"
import {ProductContext} from "./Productprovider"
import {Product} from "./Product"

export const ProductList = () =>{
    const{ products, getProducts} = useContext(ProductContext)
    
    useEffect(() => {
        console.log("ProductList: Initial render before data")
        getProducts()
    },[])

    return (
        <div className ="Products">
        {
           products.map(prod => <Product key={prod.id} products={prod} /> ) 
        }
        
        </div>)
        } 