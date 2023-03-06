import React, { useRef } from "react";
import "./style.css"
import { Container, Image } from "../../components"
import { Link } from "react-router-dom";
import { ABOUT_ME_DARK, ABOUT_ME_WHITE, BOOKS_READ_DARK, BOOKS_READ_WHITE, CONTACT_DARK, CONTACT_WHITE, HOME_DARK, HOME_WHITE, PLACES_VISITED_DARK, PLACES_VISITED_WHITE } from "../../assets/images"
import { useLocation } from "react-router-dom";

const Navbar = () => {

    const navbar = useRef()

    const { pathname } = useLocation()

    window.addEventListener("scroll",(e) => {
        if (window.scrollY > 50) {
            navbar.current?.classList.add("scrolled-nav")
        } else if (window.scrollY < 50) {
            navbar.current?.classList.remove("scrolled-nav")
        }
    })

    const currentPath = (x) => {
        const isActive = x === pathname ? "active" : ""
        return isActive;
    }

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
                            <Link to={"/"} className={currentPath("/")}>
                                <h1>Anasayfa</h1>
                                <div className="icon">
                                    <Image src={currentPath("/") === "active" ? HOME_WHITE : HOME_DARK} alt="home" />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/about-me"} className={currentPath("/about-me")}>
                                <h1>Hakkımda</h1>
                                <div className="icon">
                                    <Image src={currentPath("/about-me") === "active" ? ABOUT_ME_WHITE : ABOUT_ME_DARK} alt="home" />
                                </div>
                            </Link>
                        </li>
                        <li className="drop-down">
                            <h1>Hobiler</h1>
                            <ul>
                                <li>
                                    <Link to={"/places-visited"} className={currentPath("/places-visited")}>
                                        <h1>Seyehat Yerleri</h1>
                                        <div className="icon">
                                            <Image src={currentPath("/places-visited") === "active" ? PLACES_VISITED_WHITE : PLACES_VISITED_DARK} alt="home" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/books-read"} className={currentPath("/books-read")}>
                                        <h1>Okunan Kitaplar</h1>
                                        <div className="icon">
                                            <Image src={currentPath("/books-read") === "active" ? BOOKS_READ_WHITE : BOOKS_READ_DARK} alt="home" />
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to={"/contact"} className={currentPath("/contact")}>
                                <h1>İletişim</h1>
                                <div className={`icon ${currentPath("/contact")}`}>
                                    <Image src={currentPath("/contact") === "active" ? CONTACT_WHITE : CONTACT_DARK} alt="home" />
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