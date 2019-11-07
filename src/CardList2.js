import React, {useEffect, useState} from "react"
import axios from "axios"
import Card2 from "./Card2"
function CardList2 () {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=eZRex96J8dGYwqUdHdupOLAJZedArOZYwQwoFcNG
        `)
        .then(response => {
            setData(response.data)
        })
        .catch(err => console.log("Error found: ", err))

    }, [])


    
    console.log(data)
    return (
        <div>
            <h1>CARD2</h1>
            <Card2 explanation = {data.explanation} date = {data.date} imgUrl = {data.hdurl}/>
        </div>
    )
}

export default CardList2