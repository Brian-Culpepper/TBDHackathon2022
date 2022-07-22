import './index.css'
import {abbaLyrics, LOAPV1, LOAPV2} from "../../data.js"
import Footer from '../../components/Footer'
import {Link} from 'react-router-dom'
import home from '../../components/AlbumCover/ABBA.png'

const songs = [abbaLyrics, LOAPV1, LOAPV2];

const LyricPageMain = () => {
    
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
        <div className="lyric-container">
            {songs[0].map((data, key) => {
            return (
                <div className='lyrics' key={key}>
                {data.lyrics}
                </div>
            );
            })}
        </div>
        <br></br>
        <div className='footer-div'>
            <Footer/>
        </div>
        </>
    );

    
}

export default LyricPageMain