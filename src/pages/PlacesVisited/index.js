import React from "react";
import "./style.css"
import { Container, Footer, Header, Modal } from "../../components";
import { Navbar } from "../../layouts";
import { PLACES_VISITED_HEADER } from "../../assets/images";
import { VisitedCard } from "./subComponents/VisitedCard";
import { FirebaseRequests } from "../../requests/firebaseRequests";

const xd = "Çalışmanın önemli olduğu kadar dünyayı gezip yeni insanlarla tanışmakta bir o kadar önemlidir. Hadi sizinle nereleri seyahet ettiğime bakalım."

class PlacesVisited extends React.Component{

    state = {
        visits_data: []
    }

    async componentDidMount (){
        const { data } = await FirebaseRequests.getFirestore({ collection_name: "visited-places" })
        this.setState({ visits_data: data })
    }

    openModal = (image) => {
        Modal.Show({ image })
    }

    render(){
        const { visits_data } = this.state
        return (
            <section id="places-visited">
                <Navbar/>
                <Modal/>
                <Header title={"Places Visited"} image={PLACES_VISITED_HEADER} text={xd} />
                <div className="visited-content-wrapper">
                    <Container>
                        <div className="visited-content">
                            {
                                visits_data.map((e) => (
                                    <VisitedCard key={e.id} data={e} openModal={this.openModal}/>
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