import React, { useState} from "react"
import "./Product.css"
export const ProductContext  = React.createContext()

export const Productprovider =(props) =>{
const[products, setProducts] = useState([])


export const getProducts = () =>{
    return fetch("http://localhost:8088/products")
            .then(res => res.json())
            .then(setProducts)
}
export const addProducts = (products) =>{
    return fetch("http://localhost:8088/products",{
    method: "POST",
    headers: {
        "content-type" : "application/json"
    },
    body: JSON.stringify(products)
})
.then(getProducts)
}

return (
    <ProductContext.Provider value={
        {
            products, addProducts, getProducts
    }}>
        {props.children}
    </ProductContext.Provider>
)
}
