import './Banner.scss';

function Banner({ bgimg, bgtext }) {
    return (
        <div className={bgimg}>
            <h1 className='banner__text' style={bgtext}>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner;