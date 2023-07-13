import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ name, cover, id }) {
    return (
        <Link to={`property/${id}`}>
            <div className='property__card' style={{
                backgroundImage: `url(${cover})`
            }}>
                <h2 className='property__title' id={id}>{name}</h2>
            </div>
        </Link>
    )

}


export default Card;