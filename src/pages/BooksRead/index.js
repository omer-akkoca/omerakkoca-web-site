import React, { useEffect, useRef, useState } from "react";
import "./style.css"
import { BOOKS_READ_HEADER, DOWN_ARROW } from "../../assets/images";
import { Container, Footer, Header } from "../../components";
import { Navbar } from "../../layouts";
//import { FirebaseClient } from "../../requests"
import BookCard from "./book-card";
import { getDocs, collection, query, orderBy, where, limit, getCountFromServer} from "firebase/firestore"
import { firestore } from "../../library/firebase";
import { BOOK_STATUS } from "../../constants/status";

const xd = `
"Biz zevk için harcadığımız paradan fazla, kitap için sarfetmediğimiz müddetçe, bu ülke hiç bir zaman medeni bir ülke olamayacaktır" der Elbert Hubberd. Aslında tamda içinde bulunduğumuz toprakları ve insanımızı bize anlatan bir söz bu.
Oysaki her kitabın her sayfası bize farklı bir perspektif sunmaz mı. Bir kitabın içinde yaşayan her bir karakterin her birimiz için göstereceği ve öğreteceği, bizlere anlatacağı bir hikaye bulunmaz mı?
`

const BooksRead = () => {

    const [totalBook, setTotalBook] = useState(0)
    const [books, setBooks] = useState([])
    const [type, setType] = useState("all")
    const [page, setPage] = useState(1)
    const [showTypes, setShowTypes] = useState(false)

    const loadMoreButton = useRef(null)

    useEffect(() => window.scrollTo(0,0), [])

    useEffect(() => {
        getCountFromServer(collection(firestore, "books-read"))
        .then(resp => setTotalBook(resp.data().count))
    }, [])

    useEffect(() => {
        getDocs(query(
            collection(firestore, "books-read"),
            where("type",`array-contains`,type), orderBy("id"), limit(page * 12)
        ))
        .then((snapshot) => {
            const books = snapshot.docs.map(x => ({ id: x.id, ...x.data() }))
            setBooks(books)
        })
    }, [type, page])

    const handlePagination = () => {
        window.scrollTo(0, window.scrollY + 99999)
        setPage(prev => prev + 1)
    }

    return(
        <section id="books-read">
            <Navbar />
            <Header title="books read" text={xd} image={BOOKS_READ_HEADER}/>
            <div className="books-read-wrapper">
                <Container>
                    <div className="filter-wrapper">
                        <div
                            className="filter"
                            onClick={() => setShowTypes(prev => !prev)}
                            style={{ borderRadius: showTypes ? "5px 5px 0 0" : "5px" }}
                        >
                            <p>{BOOK_STATUS.find(e => e.key === type).label}</p>
                            <img
                                src={DOWN_ARROW}
                                alt="up-arrow"
                            />
                            {
                                showTypes && (
                                    <div className="item-container">
                                        {
                                            BOOK_STATUS.map((e, i) => (
                                                <span onClick={() => {
                                                    setType(e.key)
                                                    setPage(1)
                                                }} key={i} value={e.key}>{e.label}</span>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="books-content">
                        {
                            books.map(e => (
                                <BookCard key={e.id} data={e}/>
                            ))
                        }
                    </div>
                    {
                        !(page * 12 > totalBook) && (
                            <div className="load-more-wrapper">
                                <button
                                    onClick={handlePagination}
                                    className="custom-button"
                                    ref={loadMoreButton}
                                >Load More</button>
                            </div>
                        )
                    }
                </Container>
            </div>
            <Footer/>
        </section>
    )
}

export { BooksRead }