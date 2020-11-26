import React, { useContext, useEffect } from "react"
import "./Product.css"
import {ProductTypeContext} from "../productType/ProductTypeprovider"
import {ProductContext} from "./Productprovider"
import {Product} from "./Product"

export const ProductList = () =>{
    const{ products, getProducts} = useContext(ProductContext)
    const{producTypes, getProductType}= useContext(ProductTypeContext)
    
    useEffect(() => {
        console.log("ProductList: Initial render before data")
        getProductType()
        .then(getProducts)
    },[])

    return (
        <div className="products">
            {
        products.map(product => {
          const productType = producTypes.find(x => x.id === product.productTypeId)
          
          console.log(product)
          return <Product key={product.id}
            productType={productType}
            products={product} />
        })}
        </div>
        )
      
      }







    // return (
    //     <div className ="Products">
    //     {
    //        products.map(prod =>  {
    //         const type = producTypes.find(p => p.id === prod.productTypeId)
    //         // console.log(prod)
           
    //         return 
    //         <Product key ={prod.id}
    //                 productType = {type}
    //                 products = {prod}
    //                 />
            
    //             })
    //         }
            
    //     </div>
    //     )
    //     }

        