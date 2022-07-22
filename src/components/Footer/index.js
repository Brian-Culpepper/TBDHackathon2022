import "./index.css"
import addToPlaylist from '../../assets/images/AddToPlaylist.png'
import connect from '../../assets/images/Connect.png'
import replay from '../../assets/images/Replay.png'
import play from '../../assets/images/Play.png'
import skip from '../../assets/images/Skip.png'
// import pause from '../../assets/images/Pause.png'
import url from "../MainPageCenter/Abba_-_Dancing_Queen_Official_Musi_(getmp3.pro).mp3"
import React, { useState, useEffect } from "react";

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
          audio.removeEventListener('ended', () => setPlaying(false));
        };
      }, []);
      useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
          audio.removeEventListener('ended', () => setPlaying(false));
        };
      }, []);

      return [playing, toggle];
    };

const Footer = () => {
    const [playing, toggle] = useAudio(url);

    return (
        <>
            <div className='footer'>
                <input className='queueMargin' type="image" name="addToPlaylist" src={addToPlaylist} width='40' height='40' alt='addToPlaylist'/>
                <input className='playAndPause' type="image" name="replay" src={replay} width='40' height='40' alt='replay'/>
                <input className='playAndPause' type="image" name="play" src={play} width='50px' height='50px' onClick={toggle} alt='play'/>
                <input type="image" name="skip" src={skip} width='40' height='40' alt='skip'/>
                {/* <button className='playAndPause' onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
                <br></br>
                <input className='connectMargin' type="image" name="connect" src={connect} width='25' height='25' alt='connect'/>
                <p className='connectDevice'>Connect a device</p>
            </div>
        </>
    )
}

export default Footer