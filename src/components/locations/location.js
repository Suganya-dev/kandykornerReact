import React from "react"
import "./location.css"

export const Location =({location}) =>{
    <section className="animal">
    <h3 className="location__name">{location.name}</h3>
    <address className="location__squarefeet">{location.squarefeet}</address>
    <address className="location__handicap">{location.handicap}</address>
    </section>
}