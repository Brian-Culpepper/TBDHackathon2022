import "./index.css"
import pic from "../AlbumCover/AbbeyRoad.png"
const AlbumCover = () => {
    return (
        <>
        <div>
            <img className="container album-cover" src={pic} alt="Cover of Abbey Road from The Beatles"></img>
        </div>
        </>
    )
}

export default AlbumCover