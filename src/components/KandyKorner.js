import React from "react"
import { Route } from "react-router-dom"
import "./location.css"
import{LocationProvider} from "./locations/locationProvider"
import{LocationList} from "./locations/locationList"

export const kandykorner = () =>{
    <>
          <h1>Nashville Kandykorner</h1>
          <small>Loving place to have your candies.</small>

          <h2>Location</h2>
        <article className="locations">
        <LocationProvider>
            < LocationList/>
           </LocationProvider>
           </article>
           </>
}
