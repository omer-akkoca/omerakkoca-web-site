import React from "react";
import "./style.css"
import { Container, Footer, Header } from "../../components";
import { Navbar } from "../../layouts";
import { PLACES_VISITED_HEADER } from "../../assets/images";

const xd = "Çalışmanın önemli olduğu kadar dünyayı gezip yeni insanlarla tanışmakta bir o kadar önemlidir. Hadi sizinle nereleri seyahet ettiğime bakalım."

class PlacesVisited extends React.Component{
    render(){
        return (
            <section id="places-visited">
                <Navbar />
                <Header title={"Places Visited"} image={PLACES_VISITED_HEADER} text={xd} />
                <div className="visited-content-wrapper">
                    <Container>
                        <div className="visited-content">
                            {
                                [1,2,3,4,5,6,7,8,9].map(() => (
                                    <div className="visited-card">
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/omer-akkoca.appspot.com/o/visits%2Fomer-2.jpg?alt=media&token=c9621ae1-2331-4215-8530-1ae07ec82029"
                                            alt="photo"
                                        />
                                    </div>
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

export { PlacesVisited }