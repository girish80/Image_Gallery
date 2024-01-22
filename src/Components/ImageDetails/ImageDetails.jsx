import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import './ImageDetails.css'

 

 function ImageDetails(){
    const {id} = useParams()
    const [photo, setPhoto] = useState({})

    async function fetchImages(){
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        console.log(response.data);
        setPhoto({
            image: response.data.photo.url,
            title: response.data.photo.title,
            description:response.data.photo.description,
            id: response.data.photo.id
        })
    }

    useEffect(()=>{
        fetchImages()
    },[])
    return(
        <div className="photos">
            <div><img id="img" src={photo.image} /></div>
            <div className="heading">
                <h1> {photo.title}</h1>
                <p>{photo.description}</p>
            </div>
        </div>
    )
 }

 export default ImageDetails;