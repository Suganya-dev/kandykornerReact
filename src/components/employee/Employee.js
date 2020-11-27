import React from "react"
import "./Employee.css"

export const Employee = ({employees}) =>(
    <>
     <section className="employee">
     <h3 className="employee__name">{employees.name}</h3>
    <address className="employee__manager">{employees.manager}</address>
    <div className="employee__time">{employees.fulltime}</div>
    <div className="employee__rate">{employees.hourlyrate}</div>
    <div className="employee__id ">{employees.locationId}</div>
</section>
     </>
)