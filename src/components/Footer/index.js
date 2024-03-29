import React from "react"
import "./style.css"
import { Container } from "../Container"
import { Link } from "react-router-dom"

const Footer = () => {
    return(
        <footer>
            <Container>
                <div className="content">
                    <h1>Created and designed by Omer Akkoca at 2021</h1>
                    <ul>
                        <li><Link to="/"><h1>Anasayfa</h1></Link></li>
                        <li><Link to="/about-me"><h1>Hakkımda</h1></Link></li>
                        <li><Link to="/contact"><h1>İletişim</h1></Link></li>
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export { Footer };