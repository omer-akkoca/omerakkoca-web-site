import React from "react";
import "./style.css"
import { Navbar } from "../../layouts";
import { Container, Footer, Header, Image } from "../../components";
import { CONTACT_HEADER } from "../../assets/images";
import { IoLocation, IoMail } from "react-icons/io5"
import { AiTwotonePhone } from "react-icons/ai"
import { INSTAGRAM, FACEBOOK, TWITTER, GITHUB, LINKEDIN } from "../../assets/images"

const social_media = [
    {
        url: "",
        img: FACEBOOK
    },
    {
        url: "",
        img: INSTAGRAM
    },
    {
        url: "",
        img: TWITTER
    },
    {
        url: "",
        img: GITHUB
    },
    {
        url: "",
        img: LINKEDIN
    }
]

const xd = "Buraya kadar neler yaptığımı nasıl biri olduğumu biraz olsun anlamışsınızdır.Şimdi eğer kafanızda herhangi bir proje var ise lütfen iletişim kurmayı unutmayınız."

class Contact extends React.Component{
    render() {
        return (
            <section id="contact">
                <Navbar />
                <Header title={"contact"} image={CONTACT_HEADER} text={xd} />
                <div className="content-wrapper">
                    <Container>
                        <div className="contact-content">
                            <div className="infos">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><IoLocation size={25} color={"#0d172a"} /></td>
                                            <td><p>Sancaktepe - Istanbul / Turkey</p></td>
                                        </tr>
                                        <tr>
                                            <td><IoMail size={25} color={"#0d172a"} /></td>
                                            <td><p>omerakkoca1042@gmail.com</p></td>
                                        </tr>
                                        <tr>
                                            <td><AiTwotonePhone size={25} color={"#0d172a"} /></td>
                                            <td><p>(+90) 534 623 52 70</p></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="social-media">
                                {
                                    social_media.map((e,i) => (
                                        <a key={i.toString()} href={e.url} target="_blank" rel="noreferrer">
                                            <Image
                                                src={e.img}
                                                alt="social"
                                                width="25"
                                                height="25"
                                            />
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </Container>
                </div>
                <Footer />
            </section>
        )
    }
}

export { Contact }