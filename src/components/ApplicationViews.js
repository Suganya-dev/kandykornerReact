import React from "react"
import { Route } from "react-router-dom"
import {Productprovider} from "./products/Productprovider"
import {ProductList} from "./products/ProductList"
import {LocationProvider} from "./locations/locationProvider"
import {LocationList} from "./locations/locationList"
import {ProductTypeProvider} from "./products/ProductTypeprovider"

export const ApplicationViews = (props) =>{
    return (
        <>

        <LocationProvider>
        <Route exact path="/locations">
            < LocationList/>
            </Route>
           </LocationProvider>

            <ProductTypeProvider>
           <Productprovider>
           <Route exact path="/products">
            < ProductList/>
            </Route>
           </Productprovider>
           </ProductTypeProvider>
           </>
    )
}