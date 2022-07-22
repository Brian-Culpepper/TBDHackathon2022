import './index.css'
import {abbaLyrics, LOAPV1, LOAPV2} from "../../data.js"
import Footer from '../../components/Footer'

const songs = [abbaLyrics, LOAPV1, LOAPV2];

const LyricPageMain = () => {
    
    return (
        <>
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