import { useState } from 'react';
import './Collapse.scss';
import arrowclosed from "./arrowclosed.png"

function Collapse({ title, text, id }) {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open)
        if (!open) {
            document.getElementById(id).style.transform = "rotate(180deg)";
        }
        else {
            document.getElementById(id).style.transform = "rotate(0deg)";
        }

    }



    return (
        <><div className='collapse__div'>
            <div onClick={toggle} className="top__bar">
                <h1 className='collapse__title'>{title}</h1>
                <img className='arrow__closed' id={id} src={arrowclosed} alt="Paysage" />
            </div>
            {open && <div className='bottom__bar'><p className='collapse__text'>{text}</p></div>}
        </div></>
    )
}

export default Collapse;