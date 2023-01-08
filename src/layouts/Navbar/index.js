import React, { useRef } from "react";
import "./style.css"
import { Container } from "../../components"
import { Link } from "react-router-dom";
import { ABOUT_ME, BOOKS_READ, CONTACT, HOME, PLACES_VISITED } from "../../assets/images"

const Navbar = () => {

    const navbar = useRef()

    window.addEventListener("scroll",(e) => {
        if (window.scrollY > 50) {
            navbar.current?.classList.add("scrolled-nav")
        } else if (window.scrollY < 50) {
            navbar.current?.classList.remove("scrolled-nav")
        }
    })

    return (
        <nav ref={navbar}>
            <Container>
                <div className="navbar-inner">
                    <div className="logo">
                        <Link to={"/"}>
                            <h1>OA</h1>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link to={"/"}>
                                <h1>Home</h1>
                                <div className="icon">
                                    <img src={HOME} alt="home" />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/about-me"}>
                                <h1>About Me</h1>
                                <div className="icon">
                                    <img src={ABOUT_ME} alt="home" />
                                </div>
                            </Link>
                        </li>
                        <li className="drop-down">
                            <h1>My Interest</h1>
                            <ul>
                                <li>
                                    <Link to={"/places-visited"}>
                                        <h1>Places Visited</h1>
                                        <div className="icon">
                                            <img src={PLACES_VISITED} alt="home" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/books-read"}>
                                        <h1>Books Read</h1>
                                        <div className="icon">
                                            <img src={BOOKS_READ} alt="home" />
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to={"/contact"}>
                                <h1>Contact</h1>
                                <div className="icon">
                                    <img src={CONTACT} alt="home" />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div></div>
            </Container>
        </nav>
    )
}

export { Navbar }