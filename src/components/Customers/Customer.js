import React from "react"
import "./Customer.css"

export const Customercard = ({customer}) =>(
    <section className="customer">
    <h3 className="customer__name">{customer.name}</h3>
    <div className="customer__place">{customer.place}</div>
</section> 
)