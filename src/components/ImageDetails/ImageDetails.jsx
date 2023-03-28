import { useState } from "react"

function ImageDetails({image, likesCountUpdate, GetID, DeletePost}) {

    const [showDescription, setShowDescription] = useState(false)
    let toggleImage = () => {
        setShowDescription(!showDescription)
    }

    const updateLike = () => {
        likesCountUpdate(image.id)
        GetID(image.id)
    }

    const clickDeletePost = () => {
        DeletePost(image.id);
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
         <button onClick={clickDeletePost}>Delete Post</button>
        </div>
        </div>
    </>)
}

export default ImageDetails;