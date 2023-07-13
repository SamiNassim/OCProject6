import { Link } from "react-router-dom";
import "./Notfound.scss";

function Notfound() {
    return (
        <div className="notfound">
            <h1 className="fourofour">404</h1>
            <h2 className="subtext">Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className="homelink">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Notfound;