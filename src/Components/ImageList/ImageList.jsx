import axios from 'axios';
import './ImageList.css';
import { useEffect, useState } from 'react';
import Photos from '../Photos/Photos';

function ImageList() {
    const [imageList, setImageList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    async function fetchImages() {
        try {
            const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20');
            console.log(response);
            const imagePhotos = response.data.photos;

        
            const processedImages = imagePhotos.map((imageResponse) => {
                const  data  = imageResponse
                return {
                    image: data.url,
                    description: data.description,
                    title: data.title,
                    id: data.id
                };
            });

            
            setImageList(processedImages);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching images:', error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div>
        
            <div className='photo'>
                {isLoading ? 'Loading' :
                    imageList.map((photo, index) => <Photos imageUrl={photo.image} key={index} id={photo.id} />)}
            </div>
        </div>
    );
}

export default ImageList;
