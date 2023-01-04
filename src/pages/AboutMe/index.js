import React from "react";
import { Navbar } from "../../layouts";

class AboutMe extends React.Component{
    render(){
        return (
            <section id="about-me">
                <Navbar />
                <h1>ABOUT ME</h1>
            </section>
        )
    }
}

export { AboutMe }