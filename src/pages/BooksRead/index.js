import React from "react";
import "./style.css"
import { BOOKS_READ_HEADER } from "../../assets/images";
import { Container, Footer, Header } from "../../components";
import { Navbar } from "../../layouts";

const xd = '"Biz zevk için harcadığımız paradan fazla, kitap için sarfetmediğimiz müddetçe, bu ülke hiç bir zaman medeni bir ülke olamayacaktır" der Elbert Hubberd.'

class BooksRead extends React.Component{
    render(){
        return(
            <section id="books-read">
                <Navbar />
                <Header title="books read" text={xd} image={BOOKS_READ_HEADER}/>
                <div className="books-read-wrapper">
                    <Container>
                        <div className="books-read-content">

                        </div>
                    </Container>
                </div>
                <Footer/>
            </section>
        )
    }
}

export { BooksRead }