import React from "react"
import "./location.css"

export const Location =({location}) =>(
    <>
    <section className="location">
    <h3 className="location__name">{location.address}</h3>
    <address className="location__squarefeet">{location.Squarefootage}</address>
    <address className="location__handicap">{location.Handicapaccessible}</address>
    </section>
    </>
)