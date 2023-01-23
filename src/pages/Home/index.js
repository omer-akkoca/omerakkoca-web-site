import React from "react";
import "./style.css"
import { Navbar } from "../../layouts"; 
import { Container } from "../../components";
import { FirebaseClient } from "../../requests";

class Home extends React.Component{
    
    state = {
        cv_url: ""
    }

    async componentDidMount(){
        const { data, error } = await FirebaseClient.getDocument({ collection_name: "about-me", document_name: "cv" })
        if (data) {
            this.setState({ cv_url: data.url })
        }
    }

    render(){
        return(
            <section id="home">
                <Navbar/>
                <div className="home-inner">
                    <Container>
                        <div className="content">
                            <div className="profile-picture">
                                <img
                                    src="https://omerakkoca.netlify.app/static/media/home-avatar.ef57a20f.jpg"
                                    alt="profile-hoto"
                                />
                            </div>
                            <div className="user-titles">
                                <h1>Ömer AKKOCA</h1>
                                <h2>Software Engineer</h2>
                                <h2>Front-End Developer</h2>
                                <div className="button-wrapper">
                                    <a href={this.state.cv_url} download="omer-akkoca-cv" target="_blank" rel="noreferrer">
                                        <button className="download-cv">Downlaod CV</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        )
    }
}

export { Home }