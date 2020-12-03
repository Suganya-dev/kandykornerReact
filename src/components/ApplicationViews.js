import React from "react"
import { Route } from "react-router-dom"
import {Productprovider} from "./products/Productprovider"
import {ProductList} from "./products/ProductList"
import {LocationProvider} from "./locations/locationProvider"
import {LocationList} from "./locations/locationList"
import {ProductTypeProvider} from "./productType/ProductTypeprovider"
import {Employeeprovider} from "./employee/EmployeeProvider"
import {EmployeeList} from "./employee/EmployeeList"
import {CandiesProvider} from "./Customers/CustomerCandyProvider"
import {CustomerProvider} from "./Customers/Customerdataprovider"
import {CustomerList} from "./Customers/CustomerList"

export const ApplicationViews = (props) =>{
    return (
        <>

        <LocationProvider>
        <Route exact path="/locations">
            < LocationList {...props}/>
            </Route>
           </LocationProvider>

           <Productprovider>
            <CandiesProvider>
            <ProductTypeProvider>
           <Route exact path="/products">
            < ProductList {...props}/>
            </Route>
           </ProductTypeProvider>
           </CandiesProvider>
           </Productprovider>

            <Employeeprovider>
            <LocationProvider>
            <Route exact path="/employees">
           <EmployeeList/>
               </Route>
            </LocationProvider>
            </Employeeprovider>

            <CustomerProvider>
            <Route exact path="/Customers">
            < CustomerList {...props}/>
            </Route>
            </CustomerProvider>
        </>
    )
}
