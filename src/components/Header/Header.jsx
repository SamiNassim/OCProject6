import logo from "./logo.png";
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

export function Header() {

    const location = useLocation();

    console.log(location);

    return (
        <header className="header__div">
            <img className="header__logo" src={logo} alt="Logo Kasa" />
            <nav>
                <ul>
                    <li className={`nav__list ${location.pathname === '/' && "active"}`} id="home-link" >
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className={`nav__list ${location.pathname === "/apropos" && "active"}`} id="about-link">
                        <Link to="/apropos">A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}