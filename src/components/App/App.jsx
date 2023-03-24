import { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import RenderGalleryList from '../GalleryList/GalleryList'


function App() {

  // stting my state
  let [newGalleryImage, setNewGalleryImage] = useState([])

  //  on lood calls the get function
    useEffect(() => {
      getGallery() 
    }, [])

    // my Get function
    const getGallery = () => {
      axios.get('/gallery')
      .then(response => {
        console.log('in app',response)
        setNewGalleryImage(response.data)
      }).catch((error) => {
        console.log('error in Get', error);
      })
    }

    // here is my put axios
    const updateLikes = (id) => {
      console.log('inside like button')
      axios.put(`/gallery/like/${id}`)
      .then((response) => {
        console.log('PUT response', response)
        getGallery()
      }).catch((error) => {
        console.log('error in PUT', error)
      })
    }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <RenderGalleryList GalleryItems={newGalleryImage} UpdatingLikeCount={updateLikes}/>
      </div>
    );
}

export default App;
