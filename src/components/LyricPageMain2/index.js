import './index.css'
import {abbaLyrics, LOAPV1, LOAPV2} from "../../data.js"
import Footer from '../../components/Footer'
import {Link} from 'react-router-dom'
import home from '../../components/AlbumCover2/BonJovi.jpg'

const songs = [abbaLyrics, LOAPV1, LOAPV2];

const LyricPageMain2 = () => {
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
        <div className="lyric-container">
            {songs[1].map((data, key) => {
            return (
                <div key={key}>
                {data.lyrics}
                </div>
            );
            })}
        </div>
        </>
    );
}

export default LyricPageMain2