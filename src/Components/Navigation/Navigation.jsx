import React from 'react';

const Navigation = () => {
    return(
        <header className="header">
            <h1 className="header__logo">
                <span className="header__logo--main">Zaph tours</span>
                {/* <span className="header__logo--sub">tours on another level</span> */}
            </h1>
            <nav className="header__navigation">
                <ol className="navigation__list">
                    <li className="navigation__list--item"><a href="/" className="navigation__list--link">home</a></li>
                    <li className="navigation__list--item"><a href="/" className="navigation__list--link">about</a></li>
                    <li className="navigation__list--item"><a href="/" className="navigation__list--link">upcoming tours</a></li>
                    <li className="navigation__list--item"><a href="/" className="navigation__list--link">upcoming tours</a></li>
                    <li className="navigation__list--item"><a href="/" className="navigation__list--link">team</a></li>
                    <li className="navigation__list--item"><a href="/" className="navigation__list--link">testimonials</a></li>
                    <li className="navigation__list--item"><a href="/" className="navigation__list--link">subscribe</a></li>
                </ol>
            </nav>
        </header>
    )
}
export default Navigation;