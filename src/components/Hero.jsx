import galary from '../assets/photo-grid.png';

export default function Hero() {
    return(
        <div className='hero'>
            <img src={galary} className="hero--photogrid"/>
            <br />
            <h1 className='hero--h1'>Online Experiences</h1>
            <p className='hero--content'>Join unique interactive activities by one-of-a kind hosts-all leaving home.</p>
        </div>
    )
}