import "./index.css"
import pic from "../AlbumCover/ABBA.png"
const AlbumCover = () => {
    return (
        <>
        <div>
            <img className="container album-cover" src={pic} alt="Cover of Dancing Queen album"></img>
        </div>
        </>
    )
}

export default AlbumCover