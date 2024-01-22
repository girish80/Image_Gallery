import './Photos.css'
import { Link } from 'react-router-dom'

function Photos({ imageUrl, id }) {
    return (
        <div className="photos-wrapper">
        <Link to={`/photos/${id}`}>
            <div><img id='img' src={imageUrl} alt="Gallery Item" /></div>
            </Link>
        </div>
    );
}

export default Photos;
