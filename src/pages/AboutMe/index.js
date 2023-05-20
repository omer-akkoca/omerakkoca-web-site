import React from "react";
import "./style.css"
import { Container, Footer, Header, Image } from "../../components";
import { Navbar } from "../../layouts";
import { ABOUT_ME_HEADER, ABOUT_ME_PROFILE } from "../../assets/images";
import { FirebaseClient } from "../../requests";
import moment from "moment/moment";
import WorkCard from "./subComponents/work-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const xd = `
Web sayfama hoşgeldiniz. Burada aslında benim hakkımda ayak üstü edinebileceğiniz birkaç bilgi var. Umarım benim hakkımda aradığını burada bulursun ve yeterli olur.
Olurda daha fazlasını öğrenmek iterseniz İletişim sayfasından bana ulaşabilirsiniz. Her insan farklı bir gizem doludur sonuçta.
`
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
                <Header title={"hakkımda"} image={ABOUT_ME_HEADER} text={xd}/>
                <div className="about-me-wrapper">
                    <div className="about-content">
                        <div className="element biography-wrapper">
                            <Container>
                                <div className="biography">
                                    <Image
                                        src={ABOUT_ME_PROFILE}
                                        alt={"omer-akkoca"}
                                        width="250"
                                        height="250"
                                    />
                                    <p>
                                        Merhaba. Benim adım Ömer Akkoca ve {old} yaşındayım. Yazılım hayatıma lise 2'de Madenler Mesleki ve Teknik
                                        Anadolu Lisesi'nde c# öğrenerek başladım. Burada c# ile hem yazılım işine girmiş oldum hemde lise 3'te
                                        web tasarım alanı ile aslında şuanki işim olan alana ilk adımımı atmış oldum. Daha sonrasında üniversite seçimlerimde
                                        matemetik veya bilgisayar mühendisliği okumaya karar verdim. Bu kararım sonucunda da ilk seçimim olan Karadeniz Teknik
                                        Üniveristesi Yazılım Mühendisliği bölümüne yerleştim. Burada yine c++ ve java ile yazılıma 2. adımımı atmış oldum.
                                        Pandeminin başlarında ise liseden kalma bilgilerimle şuanki gördüğünüz siteyi yapmak istedim ama bilgilerimin çok yetersiz
                                        olduğunun farkına vardım. Bu sayede şuanki işim olan Front-end Developer'lığa girişin en sağlam adımlarını atmış oldum. Önce web siteleri
                                        yapmaya sonrasında ise web bilgilerimi kullanabileceğim ikinci bir alan olan mobil programlamaya merak sardım ve react-native
                                        ile mobil programlama yapmaya başladım. Şuan ise hem mobil hemde web olmak üzere iki alandada front-end developer olarak
                                        çalışıyorum. Lise hayatımdan gelen hevesim ile giriştiğim, üniversite ile daha da sağlamlaştırdığım ve kendi çalışmam sayesinde
                                        ileri taşıdığım bu hevesim artık benim işim ve ben bu işi çok seviyorum. İnsan adım adım büyütüp, geliştirdiği neyi sevmez ki 😀.
                                    </p>
                                </div>
                            </Container>
                        </div>

                        <div className="element">
                            <Container>
                                <h1 className="element-title">Okul & İş Geçmİşİ</h1>
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
                                <h1 className="element-title">Bİldİğİm Yazılım Dİllerİ</h1>
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