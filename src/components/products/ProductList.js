import React, { useContext, useEffect } from "react"
import "./Product.css"
import {ProductTypeContext} from "./productType/ProductTypeprovider"
import {ProductContext} from "./Productprovider"
import {Product} from "./Product"

export const ProductList = () =>{
    const{ products, getProducts} = useContext(ProductContext)
    const{productypes, getProductType}= useContext(ProductTypeContext)
    
    useEffect(() => {
        console.log("ProductList: Initial render before data")
        getProductType()
        .then(getProducts)
    },[])

    return (
        <div className ="Products">
        {
           products.map((prod) =>  {
            const types = productypes.find(p => p.id === prod.productTypeId)
           
            return <Product key ={prod.id}
                    productType = {types}
                    />
                })
            }
        </div>)
        }

        