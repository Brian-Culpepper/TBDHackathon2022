import "./index.css"
import like from "../MainPageCenter/Like.png"
import dislike from "../MainPageCenter/Dislike.png"
const MainPageCenter = () => {
    return (
        <>
        <div>
            <button type="button" className="container lyric-btn">Lyrics</button>
            <div className="container like-dislike">
                <input type="image" src={dislike} alt="dislike button" className="container dislike"/>
                <input type="image" src={like} alt="like button" className="container like"/>
            </div>
            <p className="container SongName">Mean Mr. Mustard</p>
            <p className="container Artist">The Beatles</p>
        </div>
        </>
    )
}

export default MainPageCenter