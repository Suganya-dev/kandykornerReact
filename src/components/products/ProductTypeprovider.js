import React, { useState} from "react"
// import "./location.css"
export const ProductTypeContext  = React.createContext()

export const ProductTypeProvider = (props) =>{
const[productypes, setproducts] = useState([])

const getProductType = () =>{
return fetch ("http://localhost:8088/productTypes")
.then(res => res.json)
.then(setproducts)
}

const addProductType =(productTypes) =>{
    return fetch("http://localhost:8088/productTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productTypes)
        })
            .then(getProductType)
}

return (
    <ProductTypeContext.Provider value={
        {
            productypes, addProductType, getProductType
    }}>
        {props.children}
    </ProductTypeContext.Provider>
)
}