import React from "react"
// import {Route} from "react-router-dom"
import "./locations/location.css"
import "./products/Product.css"
import "./KandyKorner.css"
import{LocationProvider} from "./locations/locationProvider"
import{LocationList} from "./locations/locationList"
import {Productprovider} from "./products/Productprovider"
import {ProductList} from "./products/ProductList"

export const KandyKorner = () =>(
    <>
          <h1>Nashville Kandykorner</h1>
          <small>Loving place to have your candies.</small>

          <h2>Location</h2>
        <article className="locations">
        <LocationProvider>
            < LocationList/>
           </LocationProvider>
           </article>

           <h2>Product</h2>
        <article className="products">
        <Productprovider>
            < ProductList/>
           </Productprovider>
           </article>
     </>
)
