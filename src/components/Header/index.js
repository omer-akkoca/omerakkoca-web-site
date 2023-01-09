import React, { useRef } from "react";
import "./style.css"

const Header = ({ image, text }) => {

    const header = useRef()

    const handleOnClick = () => {
        const height = header.current.offsetHeight
        window.scrollTo(0,height)
    }

    return(
        <div  ref={header}>
            <div className="mobile-page-title">
                <h1>About Me</h1>
            </div>
            <header>
                <div className="img-bg" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="content">
                    <p>{text}</p>
                    <button className="custom-button" onClick={handleOnClick}>
                        Click For More
                    </button>
                </div>
            </header>
        </div>
    )
}

export { Header }