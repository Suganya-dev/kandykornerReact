import React from "react"
import { Route } from "react-router-dom"
import {Productprovider} from "./products/Productprovider"
import {ProductList} from "./products/ProductList"
import {LocationProvider} from "./locations/locationProvider"
import {LocationList} from "./locations/locationList"
import {ProductTypeProvider} from "./productType/ProductTypeprovider"
import {Employeeprovider} from "./employee/EmployeeProvider"
import {EmployeeList} from "./employee/EmployeeList"

export const ApplicationViews = (props) =>{
    return (
        <>

        <LocationProvider>
        <Route exact path="/locations">
            < LocationList/>
            </Route>
           </LocationProvider>

           <Productprovider>
            <ProductTypeProvider>
           <Route exact path="/products">
            < ProductList/>
            </Route>
           </ProductTypeProvider>
           </Productprovider>

            <Employeeprovider>
            <LocationProvider>
            <Route exact path="/employees">
           <EmployeeList/>
               </Route>
            </LocationProvider>
            </Employeeprovider>

           </>
    )
}
