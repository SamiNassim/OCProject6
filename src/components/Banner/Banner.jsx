import './Banner.scss';

function Banner({ className, bannerimg, bgtext }) {
    return (
        <>
            <div className="banner__wrapper">
                <img className={`banner__img ${className}`} src={bannerimg} alt="Paysage" />
                <div className={`banner__shadow ${className}`}>
                </div>
                <h1 className='banner__text' style={bgtext}>Chez vous, partout et ailleurs</h1>
            </div>
        </>
    )
}

export default Banner;