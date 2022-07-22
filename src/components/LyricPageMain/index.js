import './index.css'
import {abbaLyrics, LOAPV1, LOAPV2} from "../../data.js"
import Footer from '../../components/Footer'

const songs = [abbaLyrics, LOAPV1, LOAPV2];
const song = songs[0];

const LyricPageMain = () => {
    let totalTime = 0;
    let currentDelay = 0;
    return (
        <>
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