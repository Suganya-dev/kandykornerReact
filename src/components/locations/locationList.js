import React, { useContext, useEffect } from "react"
import "./location.css"
import {LocationContext} from "./locationProvider"
import {Location} from "./location"

export const LocationList = () =>{
const{ locations, getLocations} = useContext(LocationContext)

useEffect(() => {
    console.log("locationList: Initial render before data")
    getLocations()
},[])

return (
<div className ="locations">
{
   locations.map(loc => <Location key={loc.id} location={loc} /> ) 
}

</div>)
}
























