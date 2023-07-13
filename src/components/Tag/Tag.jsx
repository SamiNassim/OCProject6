import "./Tag.scss";

function Tag({ tagname }) {
    return (
        <div className="bullet">{tagname}</div>
    )
}

export default Tag;