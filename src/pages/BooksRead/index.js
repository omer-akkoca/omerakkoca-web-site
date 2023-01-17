import React from "react";
import "./style.css"
import { BOOKS_READ_HEADER } from "../../assets/images";
import { Container, Footer, Header } from "../../components";
import { Navbar } from "../../layouts";
import { FirebaseClient } from "../../requests"
import BookCard from "./book-card";

const xd = '"Biz zevk için harcadığımız paradan fazla, kitap için sarfetmediğimiz müddetçe, bu ülke hiç bir zaman medeni bir ülke olamayacaktır" der Elbert Hubberd.'

class BooksRead extends React.Component{

    state = {
        books: []
    }

    async componentDidMount(){
        const { data } =  await FirebaseClient.getFirestore({ collection_name: "books-read" })
        this.setState({ books: data })
        console.log(data)
    }

    render(){
        const { books } = this.state
        return(
            <section id="books-read">
                <Navbar />
                <Header title="books read" text={xd} image={BOOKS_READ_HEADER}/>
                <div className="books-read-wrapper">
                    <Container>
                        <div className="books-content">
                            {
                                books.map(e => (
                                    <BookCard key={e.id} data={e}/>
                                ))
                            }
                        </div>
                    </Container>
                </div>
                <Footer/>
            </section>
        )
    }
}

export { BooksRead }