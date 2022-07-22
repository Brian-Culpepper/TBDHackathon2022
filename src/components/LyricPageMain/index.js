import './index.css'
import {abbaLyrics, LOAPV1, LOAPV2} from "../../data.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro'


const songs = [abbaLyrics, LOAPV1, LOAPV2];

const LyricPageMain = () => {
    
    return (
        <>
        <button type='button'>Return to Song</button>
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