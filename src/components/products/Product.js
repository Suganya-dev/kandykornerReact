import React from "react"
import "./Product.css"

export const Product = ({products,productType}) =>(
<>
<section className="product">
    <h3 className="product__id">{products.id}</h3>
    <address className="product__name">{products.name}</address>
    <address className="product__price">{products.price}</address>
    
    <address className="product__types">{productType.producttype}</address>
    </section>
    </>
)