import React from "react";
import { Navbar } from "../../layouts"; 


class PlacesVisited extends React.Component{
    render(){
        return (
            <section id="places-visited">
                <Navbar />
                <h1>PLACES VISITED</h1>
            </section>
        )
    }
}

export { PlacesVisited }