import React from "react";
import "./style.css"
import { Navbar } from "../../layouts"; 

class Home extends React.Component{
    render(){
        return(
            <section id="home">
                <Navbar/>
                <h1>HOME</h1>
            </section>
        )
    }
}

export { Home }