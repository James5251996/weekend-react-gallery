import { useState } from "react"

function ImageDetails({image, likesCountUpdate}) {

    const [showDescription, setShowDescription] = useState(false)
    let toggleImage = () => {
        setShowDescription(!showDescription)
    }

    const updateLike = () => {
        likesCountUpdate(image.id)
    }


    return (<> <div className="singleImage">
        <div className="oneImage">
        {showDescription ?
        <p onClick={toggleImage} key={image.id}>{image.description}</p>
        :
        <img onClick={toggleImage} src={image.path} key={image.id}></img>
        
        }
        </div> 
        <div className="Button">
        <button onClick={updateLike}>Like</button>
         <p>{image.likes} likes by people</p>
        </div>
        </div>
    </>)
}

export default ImageDetails;