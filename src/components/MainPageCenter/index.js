import "./index.css"
import like from "../../assets/images/Like.png"
import dislike from "../../assets/images/Dislike.png"
import { Link } from "react-router-dom";    

const MainPageCenter = () => {
    return (
        <>
        <div>
            <Link className='lyricButton' to="/LyricPageMain">Lyrics</Link>
            <div className="container like-dislike">
                <input type="image" src={dislike} alt="dislike button" className="container dislike"/>
                <input type="image" src={like} alt="like button" className="container like"/>
            </div>
            <p className="container SongName">Dancing Queen</p>
            <p className="container Artist">ABBA</p>
        </div>
        </>
    )
}

export default MainPageCenter