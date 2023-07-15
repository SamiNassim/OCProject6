import { useState } from 'react';
import './Collapse.scss';
import arrowclosed from "./arrowclosed.png"

function Collapse({ title, text, id, iddiv }) {
    const [open, setOpen] = useState(false);
    const [rotated, setRotated] = useState(false);

    const toggle = () => {
        setOpen(!open)
        if (!open) {
            // Arrow opening animation
            document.getElementById(id).animate([
                { transform: "rotate(0)" },
                { transform: "rotate(-180deg)" }
            ], {
                fill: "forwards",
                duration: 200
            })
            // Div opening animation
            document.getElementById(iddiv).style.maxHeight = "300px"
            setRotated(true)
        }

        if (rotated) {
            // Arrow closing animation 
            document.getElementById(id).animate([
                { transform: "rotate(-180deg)" },
                { transform: "rotate(0deg)" }
            ], {
                fill: "forwards",
                duration: 200
            })
            // Div closing animation
            document.getElementById(iddiv).style.maxHeight = "0px"
            setRotated(false)
        }

    }



    return (
        <><div className='collapse__div'>
            <div onClick={toggle} className="top__bar">
                <h1 className='collapse__title'>{title}</h1>
                <img className='arrow__closed' id={id} src={arrowclosed} alt="Paysage" />
            </div>
            <div className='bottom__bar' id={iddiv}><p className='collapse__text'>{text}</p></div>
        </div></>
    )
}

export default Collapse;