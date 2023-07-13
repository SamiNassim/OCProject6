import './Footer.scss';
import logofooter from "./logofooter.png"

function Footer() {
    return (
        <div className="footer">
            <img className='footer__logo' src={logofooter} alt="Logo Kasa" />
            <h3 className="footer__text">© 2020 Kasa. All rights reserved</h3>
        </div>
    )
}

export default Footer;