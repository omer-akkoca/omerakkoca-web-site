import React from "react";
import "./style.css"
import { Container } from "../../components";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section id="not-found">
            <Container>
                <div className="content">
                    <h1>404</h1>
                    <h2>Üzgünüm. Böyle bir sayfa yok.</h2>
                    <Link to={"/"}>
                        <button className="go-back">Anasayfaya Dön</button>
                    </Link>
                </div>
            </Container>
        </section>
    )
}

export { NotFound }