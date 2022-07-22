import './index.css'
import {abbaLyrics, LOAPV1, LOAPV2} from "../../data.js"
import Footer from '../../components/Footer'
import {Link} from 'react-router-dom'
import home from '../../components/AlbumCover/ABBA.png'

const songs = [abbaLyrics, LOAPV1, LOAPV2];
const song = songs[0];

const LyricPageMain = () => {
    let totalTime = 0;
    let currentDelay = 0;
    return (
        <>

        <div className='lyricHeader'>
            <Link className='home' to="/" ><input type="image" name="skip" src={home} width='75' height='75' alt='skip'/></Link>
        </div>    
            <div className='SongInfo'>
                <label className="container SongName">Dancing Queen</label>
                <br></br>
                <label className="container Artist">ABBA</label>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <marquee direction='up' behavior="scroll" scrollamount="3" scrolldelay={currentDelay} height="150px" loop ="0">

        <div className="lyric-container">
            {songs[0].map((data, key) => {
                totalTime += (data.seconds * 1000);
                currentDelay = ((data.seconds * 1000) - totalTime);
            return (
                <div className='lyrics' id="div">
                {data.lyrics}
                </div>
            );
            })}
        </div>
        </marquee>
        <br></br>
        <div className='footer-div'>
            <Footer/>
        </div>
        </>
    );

    
}

export default LyricPageMain