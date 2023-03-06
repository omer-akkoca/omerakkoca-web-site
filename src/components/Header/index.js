import React, { useRef } from "react";
import "./style.css"

const Header = ({ title, image, text }) => {

    const header = useRef()

    const handleOnClick = () => {
        const height = header.current.offsetHeight
        const width = window.innerWidth
        const scrool_value = width > 800 ? height - 45 : height
        window.scrollTo(0,scrool_value)
    }

    return(
        <div  ref={header}>
            <div className="mobile-page-title">
                <h1>{title}</h1>
            </div>
            <header>
                <div className="img-bg" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="content">
                    <p>{text}</p>
                    <button className="custom-button" onClick={handleOnClick}>
                        Detaylar için tıklayınız...
                    </button>
                </div>
            </header>
        </div>
    )
}

export { Header }