import React, { useContext, useEffect } from "react"
import "./Product.css"
import {ProductTypeContext} from "../productType/ProductTypeprovider"
import {ProductContext} from "./Productprovider"
import {Product} from "./Product"

export const ProductList = () =>{
    const{ products, getProducts} = useContext(ProductContext)
    const{productTypes, getProductType}= useContext(ProductTypeContext)
    
    useEffect(() => {
        console.log("ProductList: Initial render before data")
        getProductType()
        .then(getProducts)
    },[])

    return (
        <div className="products">
     
            {
        products.map((product) => {
            // debugger
          const productTypeId = productTypes.find((x) => x.id === product.productTypeId)

          return <Product key={product.id}
            productType={productTypeId}
            products={product} />
        
        })
    }
    </div>
        )}
          
        //   console.log(product)
          
        







    