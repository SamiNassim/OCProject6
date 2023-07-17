import { useState } from "react";
import "./Carousel.scss";
import arrowleft from "./arrowleft.png"
import arrowright from "./arrowright.png"

function Carousel({ slides }) {

    const [index, setIndex] = useState(0);

    function nextSlide() {

        if (index < slides.length - 1) {
            setIndex(index + 1)
        }

        else {
            setIndex(0)
        }

    }

    function prevSlide() {
        if (index > 0) {
            setIndex(index - 1)
        }

        else {
            setIndex(slides.length - 1)
        }

    }

    var styling = {
        hidden: {
            display: "unset"
        }
    };

    if (slides.length === 1) {
        styling.hidden = {
            display: "none"
        }
    };

    return (

        <div className="carousel">
            <div className="carousel__div">
                <img className="slide" src={slides[index]} alt="Aperçu de l'appartement" />
            </div>
            <p className="current__slide" id="current-slide" style={styling.hidden}>{index + 1} / {slides.length}</p>
            <img onClick={prevSlide} className="left__arrow" id="prev-slide" src={arrowleft} style={styling.hidden} alt="Précédente" />
            <img onClick={nextSlide} className="right__arrow" id="next-slide" src={arrowright} style={styling.hidden} alt="Suivante" />
        </div>
    )
}

export default Carousel