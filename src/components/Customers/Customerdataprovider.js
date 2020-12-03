import React, { useState} from "react"
export const CustomerContext  = React.createContext()

export const CustomerProvider =(props) =>{
    const[customers,setCustomers] = useState([])


const getCustomers = () =>{
    return fetch("http://localhost:8088/customers")
    .then(res => res.json())
    .then(setCustomers)
}

const addCustomers = (customers) =>{
    return fetch("http://localhost:8088/customers",{
        method:"POST",
        headers: {
            "content-type" : "application/json"
        },
        body:JSON.stringify(candy) 
    })
    .then(getCustomers)
}
return (
    <CustomerContext.Provider value={
        {
            customers, addCustomers, getCustomers
    }}>
        {props.children}
    </CustomerContext.Provider>
)
}


