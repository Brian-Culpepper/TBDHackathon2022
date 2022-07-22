import './index.css'
import {abbaLyrics, LOAPV1, LOAPV2} from "../../data.js"
import Footer2 from '../../components/Footer2'
import {Link} from 'react-router-dom'
import home from '../AlbumCover2/BonJovi.jpg'

const songs = [abbaLyrics, LOAPV1, LOAPV2];

const LyricPageMain2 = () => {
    let totalTime = 0;
    let currentDelay = 0;
    return (
        <>
        <div className='lyricHeader'>
            <Link className='home' to="/" ><input type="image" name="skip" src={home} width='75' height='75' alt='skip'/></Link>
        </div>    
            <div className='SongInfo'>
                <label className="container SongName">Livin' on a Prayer</label>
                <br></br>
                <label className="container Artist">Bon Jovi</label>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <marquee direction='up' behavior="scroll" scrollamount="3" scrolldelay={currentDelay} height="150px" loop ="0">

        <div className="lyric-container">
            {songs[1].map((data, key) => {
            return (
                <div key={key}>
                {data.lyrics}
                </div>
            );
            })}
        </div>
        </marquee>
        <br></br>
        <div className='footer-div'>
            <Footer2/>
        </div>
        </>
    );

    
}

export default LyricPageMain2