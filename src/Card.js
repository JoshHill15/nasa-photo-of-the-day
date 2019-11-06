import React from "react"
// 
function Card({date, key, imgUrl, caption, cordinatesX, cordinatesY, cordinatesZ}){
    return (
        <div>
            <img src = {imgUrl} alt = "img"/>
            <p>Cordinates: {cordinatesX}, {cordinatesY}, {cordinatesZ}</p>
            <p>Caption: {caption}</p>
            <p>Date: {date}</p>
        </div>
    )
}



export default Card