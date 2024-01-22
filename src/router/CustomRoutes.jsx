import { Routes, Route } from 'react-router-dom';
import Images from '../Components/Images/Images';
import ImageDetails from '../Components/ImageDetails/ImageDetails';

function CustomRoutes(){
    return(
        <Routes>
        <Route  path='/' element={<Images/>}/>
        <Route path='/photos/:id' element={<ImageDetails/>} />
        </Routes>
    )
}

export default CustomRoutes;