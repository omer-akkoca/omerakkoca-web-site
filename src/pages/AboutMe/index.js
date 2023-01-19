import React from "react";
import "./style.css"
import { Container, Footer, Header } from "../../components";
import { Navbar } from "../../layouts";
import { ABOUT_ME_HEADER } from "../../assets/images";
import { FirebaseClient } from "../../requests";

const xd = "Welcome to my web site. Here is like my personal information page. You can see where did i work, what software language i know, my personal profile live etc. I hope you can find what you are looking for."

class AboutMe extends React.Component{

    state = {
        software_languages: []
    }

    async componentDidMount(){
        const { data } = await FirebaseClient.getFirestore({ collection_name: "language" })
        this.setState({ software_languages: data })
        console.log(data)
    }

    render(){
        return (
            <section id="about-me">
                <Navbar />
                <Header title={"about me"} image={ABOUT_ME_HEADER} text={xd}/>
                <div className="about-me-wrapper">
                    <Container>
                        <div className="about-content">

                        </div>
                    </Container>
                </div>
                <Footer/>
            </section>
        )
    }
}

export { AboutMe }