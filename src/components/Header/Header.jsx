import logo from "./logo.png";
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import { useEffect } from "react";

export function Header() {

    const location = useLocation();

    console.log(location);

    useEffect(() => {
        if (location.pathname === "/") {
            const home = document.querySelector("#home-link");
            home.style.textDecoration = "underline";

            const about = document.querySelector("#about-link");
            about.style.textDecoration = "none";
        }

        if (location.pathname === "/apropos") {
            const home = document.querySelector("#home-link");
            home.style.textDecoration = "none";

            const about = document.querySelector("#about-link");
            about.style.textDecoration = "underline";
        }

        if (location.pathname !== "/" && location.pathname !== "/apropos") {

            const home = document.querySelector("#home-link");
            const about = document.querySelector("#about-link");
            home.style.textDecoration = "none";
            about.style.textDecoration = "none";
        }
    })

    return (
        <div className="header__div">
            <img src={logo} alt="Logo Kasa" />
            <nav>
                <ul>
                    <li className="nav__list" id="home-link" >
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className="nav__list" id="about-link">
                        <Link to="/apropos">A propos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}