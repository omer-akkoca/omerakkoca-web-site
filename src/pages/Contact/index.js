import React from "react";
import "./style.css"
import { Navbar } from "../../layouts";
import { Footer, Header } from "../../components";
import { CONTACT_HEADER } from "../../assets/images";

const xd = "Buraya kadar neler yaptığımı nasıl biri olduğumu biraz olsun anlamışsınızdır.Şimdi eğer kafanızda herhangi bir proje var ise lütfen iletişim kurmayı unutmayınız."

class Contact extends React.Component{
    render() {
        return (
            <section id="contact">
                <Navbar />
                <Header title={"contact"} image={CONTACT_HEADER} text={xd} />
                <Footer/>
            </section>
        )
    }
}

export { Contact }