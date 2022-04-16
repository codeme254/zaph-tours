import React from "react";
import Feature from "./Feature";
import { PaperPlane, Star, Fire, ListIcon, Phone, Building } from "../Icons/Icons";
import Heading from "../Heading/Heading";
import bg1 from './../../Assets/images/bg1.jpg'
import bg2 from './../../Assets/images/bg2.jpg'

const About = () => {
    const features = [
        {
            icon: PaperPlane,
            title: '24/7 response',
            text: 'we are always at your disposal each and everyday round the clock which means that anytime is a service order time at the comfort of your freetime.'
        },
        {
            icon: Star,
            title: 'rated services',
            text: 'Our tour services are receiving 5 stars rating from all over the world. We indeed don\'t fail when it comes to touring.'
        },
        {
            icon: Fire,
            title: 'hot tour deals',
            text: 'we have classic tour deals, we give upto 40% discount on coolest trips in the country, some of our tours are in fact free!'
        },
        {
            icon: ListIcon,
            title: 'private guide',
            text: 'We offer free private tour guides and self utilities guides like packing lists so that you get 100% success in your fun. All of these are free. Great right?'
        },
        {
            icon: Phone,
            title: 'a call away',
            text: 'we are just a phone call away, which means that at anytime, anywhere, with or without the internet, you can talk to us through: 0723476521'
        },
        {
            icon: Building,
            title: 'physical offices',
            text: 'we have physical offices in Kirinyaga county (main branch) and Mombasa (branch) so you can feel free to visit and resolve issues or lean more at anytime.'
        },
    ]
    return(
        <section className="about">
            <div className="about__images">
                <div className="about__image about__image-cont1">
                    <img src={bg1} alt="tour zone" className="about__image--img about__image--img-1" />
                </div>
                <div className="about__image about__image-cont2">
                    <img src={bg2} alt="tour zone" className="about__image--img about__image--img-2" />
                </div>
            </div>
            <div className="about__textual">
                <div className="u-center">
                <Heading subHeading="About us" mainHeading="know more about zaph tours" bgText="about zaph tours" />
                </div>
                <p className="about__description">
                    We are a tours company based in Kirinyaga county Kenya, we are entirely focused on how our customers enjoy life at the lowest prices possible. Some of our tours are in fact free.
                </p>
                <div className="about__self-sale-container">
                    {/* <p className="about__self-sale--text">Why choose us:</p> */}
                    <div className="about__features--container">
                        {
                            features.map((el, i) => <Feature icon={<el.icon />} title={el.title} text={el.text} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;