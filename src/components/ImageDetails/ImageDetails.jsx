import { useState } from "react"

function ImageDetails({image, likesCountUpdate}) {

    const [showDescription, setShowDescription] = useState(false)
    let toggleImage = () => {
        setShowDescription(!showDescription)
    }

    const updateLike = () => {
        likesCountUpdate(image.id)
    }


    return (<>
        {showDescription ?
        <p onClick={toggleImage} key={image.id}>{image.description}</p>
        :
        <img onClick={toggleImage} src={image.path} key={image.id}></img>
        
        }
        <button onClick={updateLike}>Like</button>
        
        <div>

         <p>{image.likes} likes by people</p>
        </div>
    </>)
}

export default ImageDetails;