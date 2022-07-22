import "./index.css"
import like from "../MainPageCenter/Like.png"
import dislike from "../MainPageCenter/Dislike.png"
import React, { useState, useEffect } from "react";
import url from "../MainPageCenter/Abba_-_Dancing_Queen_Official_Musi_(getmp3.pro).mp3"

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
    

const MainPageCenter = () => {
    const [playing, toggle] = useAudio(url);
    return (
        <>
        <div>
            <button type="button" className="container lyric-btn">Lyrics</button>
            <div className="container like-dislike">
                <input type="image" src={dislike} alt="dislike button" className="container dislike"/>
                <input type="image" src={like} alt="like button" className="container like"/>
            </div>
            <div className="container pause-play">
                <button type="button" onClick={toggle}>{playing ? "Pause" : "Play"}</button>
            </div>
            <p className="container SongName">Dancing Queen</p>
            <p className="container Artist">ABBA</p>
        </div>
        </>
    )
}

export default MainPageCenter