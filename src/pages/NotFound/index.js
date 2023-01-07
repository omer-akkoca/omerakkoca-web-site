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
                    <h2>I'm sorry. There is nothing here.</h2>
                    <Link to={"/"}>
                        <button className="go-back">Go Back to Home Page</button>
                    </Link>
                </div>
            </Container>
        </section>
    )
}

export { NotFound }