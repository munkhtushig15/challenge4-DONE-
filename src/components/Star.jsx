import React from "react"
import Star from "../images/StarPicture.png"
import "../App.css"

const StarTwo = () => {
    return (
        <React.StrictMode>
            <img className="starStyle" src={ Star} alt="star" />   
        </React.StrictMode>
    )
}

export default StarTwo