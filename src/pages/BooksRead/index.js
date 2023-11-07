import React, { useEffect, useState } from "react";
import "./style.css"
import { BOOKS_READ_HEADER } from "../../assets/images";
import { Container, Footer, Header } from "../../components";
import { Navbar } from "../../layouts";
//import { FirebaseClient } from "../../requests"
import BookCard from "./book-card";
import { getDocs, collection, query, orderBy } from "firebase/firestore"
import { firestore } from "../../library/firebase";

const xd = `
"Biz zevk için harcadığımız paradan fazla, kitap için sarfetmediğimiz müddetçe, bu ülke hiç bir zaman medeni bir ülke olamayacaktır" der Elbert Hubberd. Aslında tamda içinde bulunduğumuz toprakları ve insanımızı bize anlatan bir söz bu.
Oysaki her kitabın her sayfası bize farklı bir perspektif sunmaz mı. Bir kitabın içinde yaşayan her bir karakterin her birimiz için göstereceği ve öğreteceği, bizlere anlatacağı bir hikaye bulunmaz mı?
`

const BooksRead = () => {

    const [books, setBooks] = useState([])

    useEffect(() => window.scrollTo(0,0), [])

    useEffect(() => {
        getDocs(query(
            collection(firestore, "books-read"),
            query(orderBy("started_at"))
        ))
        .then((snapshot) => {
            const books = snapshot.docs.map(x => ({ id: x.id, ...x.data() }))
            setBooks(books.reverse())
            console.log(books.length)
        })
    }, [])

    return(
        <section id="books-read">
            <Navbar />
            <Header title="okunan kitaplar" text={xd} image={BOOKS_READ_HEADER}/>
            <div className="books-read-wrapper">
                <Container>
                    <div className="books-content">
                        {
                            books.map(e => (
                                <BookCard key={e.id} data={e}/>
                            ))
                        }
                    </div>
                    {
                        /*!(page * 12 >= totalBook) && (
                            <div className="load-more-wrapper">
                                <button
                                    onClick={handlePagination}
                                    className="custom-button"
                                    ref={loadMoreButton}
                                >Load More</button>
                            </div>
                        )*/
                    }
                </Container>
            </div>
            <Footer/>
        </section>
    )
}

export { BooksRead }