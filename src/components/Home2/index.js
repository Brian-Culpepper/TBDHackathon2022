import './index.css'
// import SongInfo from '../SongInfo'
import MainPageCenter2 from '../MainPageCenter2'
import AlbumCover2 from '../AlbumCover2'
import Footer2 from '../Footer2'
import Header from '../Header'

const Home2 = () => {
    return (
        <>
        <html className='main-page'>
            <div>
                <Header/>
                {/* <SongInfo/> */}
                <AlbumCover2/> 
                <MainPageCenter2/>
                <Footer2/>
            </div>
        </html>
        </>
    )
}

export default Home2