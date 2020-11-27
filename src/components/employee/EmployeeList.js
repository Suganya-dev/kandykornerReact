import React, { useContext, useEffect } from "react"
import "./Employee.css"
import {EmployeeContext} from "./EmployeeProvider"
import {Employee} from"./Employee"
import {LocationContext} from "./locations/locationProvider"


export const EmployeeList = () =>{
    const{ employees, getEmployees} = useContext(EmployeeContext)
    const{locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        console.log("EmployeeList: Initial render before data")
        getLocations()
        .then(getEmployees)
    },[])

    return (
        <div className ="employee">
        {
           employees.map(emp => {
            const locate = locations.find((l) => l.id === emp.locationId)

            return< Employee key={emp.id}
             location = {locate}
             employee = {emp} />
        })
    }</div>)
    
        }
        
        
    