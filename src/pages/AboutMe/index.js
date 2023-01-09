import React from "react";
import { Footer, Header } from "../../components";
import { Navbar } from "../../layouts";
import { ABOUT_ME_HEADER } from "../../assets/images";

const xd = "Welcome to my web site. Here is like my personal information page. You can see where did i work, what software language i know, my personal profile live etc. I hope you can find what you are looking for."
//const xd = "Web sayfama hoşgeldin. Eminim ben kimim merak ediyorsunki bu sayfaya girdin :D. O zaman seni daha fazla bekletmiyorum. Hadi alttaki butona tıkla."

class AboutMe extends React.Component{
    render(){
        return (
            <section id="about-me">
                <Navbar />
                <Header title={"about me"} image={ABOUT_ME_HEADER} text={xd}/>
                <Footer/>
            </section>
        )
    }
}

export { AboutMe }