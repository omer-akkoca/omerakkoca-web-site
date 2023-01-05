import React from "react";
import "./style.css"
import { Navbar } from "../../layouts"; 
import { Container } from "../../components";

class Home extends React.Component{
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
                                    <button className="download-cv">Downlaod CV</button>
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