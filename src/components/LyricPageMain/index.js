import './index.css'
import {abbaLyrics, LOAPV1, LOAPV2} from "../../data.js"

const songs = [abbaLyrics, LOAPV1, LOAPV2];

const LyricPageMain = () => {
    
    return (
        <>
        <div className="lyric-container">
            {songs[0].map((data, key) => {
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

export default LyricPageMain