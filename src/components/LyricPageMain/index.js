import './index.css'
import {abbaLyrics, LOAPV1, LOAPV2} from "../../data.js"
import $ from 'jquery'

const songs = [abbaLyrics, LOAPV1, LOAPV2];

const LyricPageMain = () => {
    let totalTime = 0;
    return (
        <>
         <marquee direction='up' behavior="scroll" scrolldelay="500" height="100px">
            {songs[0].map((data, key) => {
                let delay = data.seconds - totalTime;
                totalTime += data.seconds;
                return (
                   
                    <div id="div"> 
                        {data.lyrics}
                    </div> 
                    
                        
                );
            })}
            </marquee>
        </>
    );

    
}



export default LyricPageMain