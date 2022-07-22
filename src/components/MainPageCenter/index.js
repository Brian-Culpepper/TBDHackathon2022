import './index.css'
import {Link} from '../../../node_modules/react-router-dom/index'

const MainPageCenter = () => {
    return (
        <>
        <div>
            {/* <button type="button" className="container lyric-btn">Lyrics</button> */}
            <Link to='/LyricPageMain' className='LyricButton'>Lyrics</Link>
        </div>
        <div>
            <p className="container SongName">Mean Mr. Mustard</p>
            <p className="container Artist">The Beatles</p>
        </div>
        </>
    )
}

export default MainPageCenter