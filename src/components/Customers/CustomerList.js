import React, { useContext, useEffect } from "react"
import "./Customer.css"
import {CustomerContext} from "./Customerdataprovider"
import {Customercard} from "./Customer"

export const CustomerList = () =>{
    const{customers,getCustomers} = useContext(CustomerContext)


useEffect(() =>{
    getCustomers()
},[])

return (
    <div className ="customers">
    {
       customers.map(cust=> <Customercard key={cust.id} customer = {cust} />)
       }
</div>)
}
    