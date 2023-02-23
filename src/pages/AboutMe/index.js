import React from "react";
import "./style.css"
import { Container, Footer, Header, Image } from "../../components";
import { Navbar } from "../../layouts";
import { ABOUT_ME_HEADER } from "../../assets/images";
import { FirebaseClient } from "../../requests";
import moment from "moment/moment";
import WorkCard from "./subComponents/work-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const xd = "Welcome to my web site. Here is like my personal information page. You can see where did i work, what software language i know, my personal profile live etc. I hope you can find what you are looking for."
class AboutMe extends React.Component{

    state = {
        software_languages: [],
        work_history: [],
        old: 0
    }

    async componentDidMount(){
        const { data: data1 } = await FirebaseClient.getFirestore({ collection_name: "language" })
        const { data: data2 } = await FirebaseClient.getFirestore({ collection_name: "jobs-history" })
        this.setState({ software_languages: data1, work_history: data2 })

        var a = moment(Date.now())
        var b = moment([2000, 4, 17])
        const old = a.diff(b, "years")
        this.setState({ old })
    }

    render(){
        const { software_languages, old, work_history } = this.state
        return (
            <section id="about-me">
                <Navbar />
                <Header title={"about me"} image={ABOUT_ME_HEADER} text={xd}/>
                <div className="about-me-wrapper">
                    <div className="about-content">
                        <div className="element biography-wrapper">
                            <Container>
                                <div className="biography">
                                    <Image
                                        src={"https://omerakkoca.netlify.app/static/media/about-avatar.12b4eeee.jpeg"}
                                        alt={"omer-akkoca"}
                                        width="250"
                                        height="250"
                                    />
                                    <p>
                                        Hello. My name is Omer AKKOCA. I was born in 17 of April in 2000.
                                        Now i am {old} years old. You will see at below what i have done in my {old} years of life.
                                        It is only important thing for you is what i have done before. Yes i am a software engineer and i am so happy with it.
                                        Üniversiteye başladığımdan beri ve lise hayatımda hep web üzerine ilerlemek istemiştim.
                                        Şuanda da bu kişisel sitem ile de karşınızdayım.
                                    </p>
                                </div>
                            </Container>
                        </div>

                        <div className="element">
                            <Container>
                                <h1 className="element-title">school & work history</h1>
                                <div className="work-list">
                                    {
                                        work_history.map((work, i) => (
                                            <WorkCard key={work.id} work={work}/>
                                        ))
                                    }
                                </div>
                            </Container>
                        </div>
                        
                        <div className="element">
                            <Container>
                                <h1 className="element-title">software languages i know</h1>
                                <Swiper
                                    slidesPerView={"auto"}
                                    spaceBetween={50}
                                    pagination={{ clickable: true }}
                                    className="mySwiper"
                                    freeMode={true}
                                    modules={[FreeMode]}
                                >
                                    {
                                        software_languages.map(e => (
                                            <SwiperSlide key={e.id} style={{ width: "auto", height: "auto" }}>
                                                <div className="language-card-wrapper">
                                                    <div className="language-card">
                                                        <Image
                                                            src={e.src}
                                                            alt={e.name}
                                                            width="25"
                                                            height="25"
                                                        />
                                                        <h3>{e.name}</h3>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </Container>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
        )
    }
}

export { AboutMe }