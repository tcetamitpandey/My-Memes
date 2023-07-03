import React from "react"
import style from "./Styles.css"

export default function Header() {
    return (
        <header className="header"> 
            <img src="./imgs/troll-face.png" alt="Troll Face" 
                className="header--img"
            /> 
            {/* we cant Directly use images either we have to Import it or We can place that image inside publicand then access it */}
            <h2 className="header--title">Meme Generator</h2>
            <h3 className="header--project">React project By Amit</h3>
        </header>
    )
}