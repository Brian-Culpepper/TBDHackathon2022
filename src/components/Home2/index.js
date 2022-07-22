import './index.css'
import SongInfo from '../SongInfo'
import MainPageCenter2 from '../MainPageCenter2'
import AlbumCover2 from '../AlbumCover2'
import Footer from '../Footer'

const Home2 = () => {
    return (
        <>
        <html className='main-page'>
            <div>
                <SongInfo/>
                <AlbumCover2/> 
                <MainPageCenter2/>
                <Footer/>
            </div>
        </html>
        </>
    )
}

export default Home2