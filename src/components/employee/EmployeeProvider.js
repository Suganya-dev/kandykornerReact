import React, { useState} from "react"
import "./Employee.css"
export const EmployeeContext  = React.createContext()

export const Employeeprovider = (props) =>{
    const [employees,setEmployees] = useState()


const getEmployees = () =>{
return fetch("http://localhost:8088/employees")
.then(res => res.json())
.then(setEmployees)
}

const addEmployees = employees =>{
    return fetch("http://localhost:8088/employees",{
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(location)
})
.then(getEmployees)
}

return (
    <EmployeeContext.Provider value={
        {
            employees, addEmployees, getEmployees
    }}>
        {props.children}
    </EmployeeContext.Provider>
)
}