import { useState } from "react";

function RenderGalleryList ({GalleryItems}) {
    // here is my function to toggel between picture and description. 
    const [description, setDescription] = useState(true)
    const toggleImage = () => {
        setDescription(!description)
    }


    console.log(GalleryItems)
    return (<>
        {description ? (
    <div>
        {GalleryItems.map(image => (
            <img onClick={toggleImage} src={image.path} key ={image.id}></img>))}
    </div>) : 
        <div>
            {GalleryItems.map(image => (
                <p onClick={toggleImage} key ={image.id}>{image.description}</p>
            ))}
        </div>
    }
    </> )
}

export default RenderGalleryList;