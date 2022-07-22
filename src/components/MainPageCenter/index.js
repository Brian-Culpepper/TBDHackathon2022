import "./index.css"
import like from "../MainPageCenter/Like.png"
import dislike from "../MainPageCenter/Dislike.png"
import { Link } from "react-router-dom";    

const MainPageCenter = () => {
    return (
        <>
        <div>
            {/* <button type="button" className="container lyric-btn">Lyrics</button> */}
            <Link to="/LyricPageMain">Lyrics</Link>
            <div className="container like-dislike">
                <input type="image" src={dislike} alt="dislike button" className="container dislike"/>
                <input type="image" src={like} alt="like button" className="container like"/>
            </div>
            <br></br>
            <p className="container SongName">Dancing Queen</p>
            <p className="container Artist">ABBA</p>
        </div>
        </>
    )
}

export default MainPageCenter