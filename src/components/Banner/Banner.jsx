import './Banner.scss';

function Banner({ bannerimg, bgtext }) {
    return (
        <>
            <div className='banner__wrapper'>
                <img className='banner__img' src={bannerimg} alt="Paysage" />
                <div className='banner__shadow'>
                </div>
                <h1 className='banner__text' style={bgtext}>Chez vous, partout et ailleurs</h1>
            </div>
        </>
    )
}

export default Banner;