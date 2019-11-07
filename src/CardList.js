import React, {useState, useEffect } from "react"
import axios from "axios"
import Card1 from "./Card"

function CardList () {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://api.nasa.gov/EPIC/api/natural?api_key=eZRex96J8dGYwqUdHdupOLAJZedArOZYwQwoFcNG
        `)
        .then(response => {
            // console.log(response)
            setData(response.data)
        })
        .catch(err => console.log("Data not being transferred", err))

    }, [])
    
    console.log(data)
    return (
        <div>
            <h1>CARD1</h1>
            {data.map((cv, index) => {
                return <Card1 
                key = {index} 
                date = {cv.date} 
                imgUrl = {cv.image}
                caption = {cv.caption}
                cordinatesX = {cv.coords.dscovr_j2000_position.x}
                cordinatesY = {cv.coords.dscovr_j2000_position.y}
                cordinatesZ = {cv.coords.dscovr_j2000_position.z}/>
            })}
        </div>
    )
}

export default CardList










// useEffect(() => {
//     axios.get(`https://swapi.co/api/people/1/`)
//     .then(response => {
//         console.log(response)
//     })
//     .catch(err => console.log("Data not being transferred", err))

// }, [])