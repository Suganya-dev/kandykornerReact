import React, { useState} from "react"
export const CandyContext  = React.createContext()

export const CandiesProvider = (props) => {
    const [candies, setCandies] = useState([])

    
 const getCandies = () =>{
    return fetch("http://localhost:8088/candies")
            .then(res => res.json())
            .then(setCandies)
}
const addCandies = (candy) =>{
    return fetch("http://localhost:8088/candies",{
    method: "POST",
    headers: {
        "content-type" : "application/json"
    },
    body: JSON.stringify(candy)
})
.then(getCandies)
}
return (
    <CandyContext.Provider value={
        {
            candies, addCandies, getCandies
    }}>
        {props.children}
    </CandyContext.Provider>
)
}

