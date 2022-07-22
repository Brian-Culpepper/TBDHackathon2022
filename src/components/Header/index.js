import "./index.css"
import expand from '../../assets/images/Expand.png'
import more from '../../assets/images/More.png'
import share from '../../assets/images/Share.png'

const Header = () => {
    return (
        <>
        <div className='header'>
            {/* ADD onClick method */}
            <input className='expand-icon' type="image" name="expand" src={expand} width='40' height='40' alt='expand'/> 
            <label className="radio-station">
                106.7 The Eagle
            </label>
            <br></br>
            <label className="live-radio">
                Live Radio
            </label>
            <input className='share-icon' type="image" name="share" src={share} width='20' height='20' alt='share'/>
            <input className='more-icon' type="image" name="more" src={more} width='20' height='20' alt='more'/>
        </div>
        </>
    )
}

export default Header