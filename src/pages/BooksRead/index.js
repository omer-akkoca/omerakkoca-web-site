import React from "react";
import { Navbar } from "../../layouts";

class BooksRead extends React.Component{
    render(){
        return(
            <section id="books-read">
                <Navbar />
                <h1>BOOKS READ</h1>
            </section>
        )
    }
}

export { BooksRead }