import React, { useContext, useEffect } from "react"
import "./Employee.css"
import {EmployeeContext} from "./EmployeeProvider"
import {Employee} from"./Employee"


export const EmployeeList = () =>{
    const{ employees, getEmployees} = useContext(EmployeeContext)

    useEffect(() => {
        console.log("EmployeeList: Initial render before data")
        getEmployees()
    },[])

    return (
        <div className ="employees">
        {
           employees.map(loc => <Employee key={loc.id} employee={loc} /> ) 
        }
        
        </div>)
        }
        
        
    