import React from "react";
import "./style.css"
import { Container, Footer, Header } from "../../components";
import { Navbar } from "../../layouts";
import { PLACES_VISITED_HEADER } from "../../assets/images";
import { VisitedCard } from "./subComponents/VisitedCard";

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
                                [1,2,3,4,5,6,7,8,9].map((e) => (
                                    <VisitedCard key={e}/>
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