import "./index.css"
import like from "../MainPageCenter2/Like.png"
import dislike from "../MainPageCenter2/Dislike.png"
import React, { useState, useEffect } from "react";
import url from "../MainPageCenter2/Bon_Jovi_-_Livin_On_A_Prayer_Offi_(getmp3.pro).mp3"
import { Link } from "react-router-dom";

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
    

const MainPageCenter2 = () => {
    const [playing, toggle] = useAudio(url);
    return (
        <>
        <div>
            {/* <button type="button" className="container lyric-btn">Lyrics</button> */}
            <Link to="/LyricPageMain2">Lyrics</Link>
            <div className="container like-dislike">
                <input type="image" src={dislike} alt="dislike button" className="container dislike"/>
                <input type="image" src={like} alt="like button" className="container like"/>
            </div>
            <div className="container pause-play">
                <button type="button" onClick={toggle}>{playing ? "Pause" : "Play"}</button>
            </div>
            <p className="container SongName">Livin on a Prayer</p>
            <p className="container Artist">Bon Jovi</p>
        </div>
        </>
    )
}

export default MainPageCenter2