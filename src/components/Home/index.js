import './index.css'
import SongInfo from '../SongInfo'
import MainPageCenter from '../MainPageCenter'
import AlbumCover from '../AlbumCover'
const Home = () => {
    return (
        <>
        <div className="container main-page">
            <SongInfo/>
            <AlbumCover/> 
            <MainPageCenter/>
             {/* 
            <HeaderAndFooter/>*/}
        </div>
        </>
    )
}

export default Home