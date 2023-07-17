import "./Rating.scss";
import starred from "./starred.png";
import stargrey from "./stargrey.png";

function Rating({ rating }) {

    let arrRed = [];
    let arrGrey = [];

    for (let i = 0; rating > i; i++) {
        arrRed.push(<img className="star__red" key={i} src={starred} alt="Etoile rouge" />)
        if (i > 5) break
    }
    for (let k = 5; k > arrRed.length; k--) {
        arrGrey.push(<img className="star__grey" key={k} src={stargrey} alt="Etoile grise" />)
        if (k < arrRed.length) break
    }

    return (
        <div className="rating">
            {arrRed}{arrGrey}
        </div>
    )
}

export default Rating