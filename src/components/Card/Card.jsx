import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ name, cover, id }) {
    return (
        <Link className="card__link" to={`property/${id}`}>
            <div className='property__card'>
                <img className='property__cover' src={cover} alt="Aperçu de l'appartement" />
            </div>
            <div className='shadow__box'></div>
            <h2 className='property__title' id={id}>{name}</h2>
        </Link>
    )

}


export default Card;