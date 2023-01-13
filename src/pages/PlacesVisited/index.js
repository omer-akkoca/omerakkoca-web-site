import React from "react";
import "./style.css"
import { Container, Footer, Header, Modal } from "../../components";
import { Navbar } from "../../layouts";
import { PLACES_VISITED_HEADER } from "../../assets/images";
import { VisitedCard } from "./subComponents/VisitedCard";

const xd = "Çalışmanın önemli olduğu kadar dünyayı gezip yeni insanlarla tanışmakta bir o kadar önemlidir. Hadi sizinle nereleri seyahet ettiğime bakalım."
const fake_data = [
    "https://firebasestorage.googleapis.com/v0/b/omer-akkoca.appspot.com/o/visits%2Fomer1.jpg?alt=media&token=91584515-68f4-4b5d-9c3b-1de0ff8b631d",
    "https://firebasestorage.googleapis.com/v0/b/omer-akkoca.appspot.com/o/visits%2Fomer-2.jpg?alt=media&token=c9621ae1-2331-4215-8530-1ae07ec82029",
    "https://firebasestorage.googleapis.com/v0/b/omer-akkoca.appspot.com/o/visits%2Fomer-3.jpg?alt=media&token=b7bcd424-7bb5-47a0-9c69-a2233ff4a3c6",
    "https://firebasestorage.googleapis.com/v0/b/omer-akkoca.appspot.com/o/visits%2Fomer4.jpg?alt=media&token=216f870e-0fd4-461b-96af-3f0dadd0e70c"
]

class PlacesVisited extends React.Component{

    openModal = (image) => {
        Modal.Show({ image })
    }

    render(){
        return (
            <section id="places-visited">
                <Navbar />
                <Modal/>
                <Header title={"Places Visited"} image={PLACES_VISITED_HEADER} text={xd} />
                <div className="visited-content-wrapper">
                    <Container>
                        <div className="visited-content">
                            {
                                fake_data.map((e) => (
                                    <VisitedCard key={e} data={e} openModal={this.openModal}/>
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