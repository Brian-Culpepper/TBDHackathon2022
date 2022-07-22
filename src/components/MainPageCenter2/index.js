import "./index.css"
import like from "../MainPageCenter2/Like.png"
import dislike from "../MainPageCenter2/Dislike.png"
import { Link } from "react-router-dom";


const MainPageCenter2 = () => {
    return (
      <>
      <div>
          <Link className='lyricButton' to="/LyricPageMain2">Lyrics</Link>
          <div className="container like-dislike">
              <input type="image" src={dislike} alt="dislike button" className="container dislike"/>
              <input type="image" src={like} alt="like button" className="container like"/>
          </div>
          <p className="container SongName">Livin' on a Prayer</p>
          <p className="container Artist">Bon Jovi</p>
      </div>
      </>
  )
}

export default MainPageCenter2