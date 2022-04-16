import React from 'react';
import { Building } from '../Icons/Icons';

const Hero = () => {
    return(
        <section className="home">
            <div className="home__textbox">
                <h1 className="home__title">
                    <span className="home__title--main">Discover</span>
                    <span className="home__title--sub">the world</span>
                </h1>
                <a href="/" className="textbox__button">explore today &hearts; &rarr;</a>

                <div className="home__subfeatures">
                    <div className="subfeature">
                        <div className="subfeature__svg">
                            <Building />
                        </div>
                        <p className="subfeature__text">accomodation</p>
                    </div>
                    <div className="subfeature">
                        <div className="subfeature__svg">
                            <Building />
                        </div>
                        <p className="subfeature__text">accomodation</p>
                    </div>
                    <div className="subfeature">
                        <div className="subfeature__svg">
                            <Building />
                        </div>
                        <p className="subfeature__text">accomodation</p>
                    </div>
                    <div className="subfeature">
                        <div className="subfeature__svg">
                            <Building />
                        </div>
                        <p className="subfeature__text">accomodation</p>
                    </div>
                    <div className="subfeature">
                        <div className="subfeature__svg">
                            <Building />
                        </div>
                        <p className="subfeature__text">accomodation</p>
                    </div>
                    <div className="subfeature">
                        <div className="subfeature__svg">
                            <Building />
                        </div>
                        <p className="subfeature__text">accomodation</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;