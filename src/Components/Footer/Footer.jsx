import React from 'react';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__cont">
                    <h2 className="footer__header">Zaph tours</h2>
                    <p className="footer__text">
                        Zaph tours is a tours and hike companys based in Kenya, Kirinyaga county, our tours are very cheap and pocket friendly, some of our tours are in fact free of charge. Try Zaph tours today and see a difference in how you have fun and relax you brain.
                    </p>
                </div>
                <div className="footer__cont">
                    <h2 className="footer__header">quick links</h2>
                    <ol className="footer__nav">
                        <li className="footer__nav--item"><a href="/" className="footer__nav--link">Home</a></li>
                        <li className="footer__nav--item"><a href="/" className="footer__nav--link">About us</a></li>
                        <li className="footer__nav--item"><a href="/" className="footer__nav--link">upcoming tours</a></li>
                        <li className="footer__nav--item"><a href="/" className="footer__nav--link">our team</a></li>
                        <li className="footer__nav--item"><a href="/" className="footer__nav--link">testimonies</a></li>
                        <li className="footer__nav--item"><a href="/" className="footer__nav--link">subscribe</a></li>
                    </ol>
                </div>
                <div className="footer__cont">
                    <h2 className="footer__header">recent blogs</h2>
                    <div className="footer__blog-list">
                        <a href="/" className="footer__blog--link">ultimate packing guide for Ladies.</a>
                        <a href="/" className="footer__blog--link">how to survive rocky hikes.</a>
                        <a href="/" className="footer__blog--link">what you should eat in these touring areas.</a>
                        <a href="/" className="footer__blog--link">saving tips for your next tour</a>
                        <a href="/" className="footer__blog--link">how to spend during your day out.</a>
                        <a href="/" className="footer__blog--link">pictorials of castle mountain tour.</a>
                    </div>
                </div>
                <div className="footer__cont">
                    <h2 className="footer__header">contact us</h2>
                    <div className="footer__contact">
                        <p className="footer__contact--item">call: 0723476521</p>
                        <p className="footer__contact--item">send us a text message: 0723476521</p>
                        <p className="footer__contact--item">email: zaphtours@coop.com</p>
                    </div>
                </div>
            </div>
            <p className="footer__text footer__copyright">
                &copy; 2022. Created with &hearts; by Dennis Otwoma. Feel free to use this project for your own purposes but don't present this work as your own.
            </p>
        </footer>
    )
}

export default Footer;