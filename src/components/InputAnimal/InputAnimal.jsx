import React, { useState } from "react";

function InputAnimal ({addAnimal}) {
    // two states to store values for image url, description.
    const [imageURL, setImageURL] = useState('')
    const [newDescription, setDescription] = useState('')

    let newPost = {
        path: imageURL,
        description: newDescription,
        likes: 0
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addAnimal(newPost)

    }


    return (<>
    <form onSubmit={handleSubmit}>
        <input placeholder="Image Url" value={imageURL} onChange={(event) => setImageURL(event.target.value)}/>
        <input placeholder="Description" value={newDescription} onChange={(event) => setDescription(event.target.value)}/>
        <button type="submit">Submit</button>
    </form>
    </>)
}

export default InputAnimal;