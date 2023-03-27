import { useState } from "react";
import ImageDetails from "../ImageDetails/ImageDetails";

function RenderGalleryList({ GalleryItems, UpdatingLikeCount }) {
    // here is my function to toggel between picture and description. 
    



    console.log(GalleryItems)
    return (<>
        <div id="imageRender">
            {GalleryItems.map(image => (
                <ImageDetails key={image.id} image={image} likesCountUpdate={UpdatingLikeCount}/>
                // here is the likes stuff

            ))}  </div>
        
    </>)
}

export default RenderGalleryList;