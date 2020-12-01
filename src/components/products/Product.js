import React,{useContext} from "react"
import "./Product.css"
import {CandyContext} from "../CustomerCandyProvider.js"

export const Product = ({products,productType}) =>{

const {addCandies} = useContext(CandyContext)

// funct for rendering data when button clicked
const createCandy = (productId) => {
    const customerId = localStorage.getItem('kandy_customer')
    // console.log(customer)
    const newCandy = {productId,customerId}
    addCandies(newCandy)
}
return (
<section className="product">
    <h3 className="product__id">{products.id}</h3>
    <address className="product__name">{products.name}</address>
    <address className="product__price">${products.price}</address>
    
    <address className="product__types">{productType.producttype}</address>
    <button onClick={() => createCandy(products.id)}>
            Make Purchase
        </button>
    </section>
)
}