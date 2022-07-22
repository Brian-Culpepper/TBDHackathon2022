import './index.css'
import SongInfo from '../SongInfo'
import MainPageCenter from '../MainPageCenter'
import AlbumCover from '../AlbumCover'
import Footer from '../Footer'

const Home = () => {
    return (
        <>
        <html className='main-page'>
            <div>
                <SongInfo/>
                <AlbumCover/> 
                <MainPageCenter/>
                <Footer/>
            </div>
        </html>
        </>
    )
}

export default Home