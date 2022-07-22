import "./index.css"
import pic from "../AlbumCover2/BonJovi.jpg"
const AlbumCover2 = () => {
    return (
        <>
        <div>
            <img className="container album-cover" src={pic} alt="Cover of Slippery When Wet album"></img>
        </div>
        </>
    )
}

export default AlbumCover2