import ImageList from "../ImageList/ImageList";
import Search from "../Search/Search";
import './Images.css'


function Images(){
    return(
        <div>
        <h1>Images</h1>
        <Search />
        <ImageList/>
        </div>
        
    )
}

export default Images;