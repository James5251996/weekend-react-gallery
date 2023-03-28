import { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import RenderGalleryList from '../GalleryList/GalleryList'


function App() {

  // stting my state
  let [newGalleryImage, setNewGalleryImage] = useState([])
  let [ID, setID] = useState('');

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
    const updateLikes = (ID) => {
      console.log('inside like button')
      axios.put(`/gallery/like/${ID}`)
      .then((response) => {
        console.log('PUT response', response)
        getGallery()
      }).catch((error) => {
        console.log('error in PUT', error)
      })
    }


    const DeletePost = (ID) => {
      console.log('inside Delete Request')
      axios.delete(`/gallery/${ID}`)
      .then((response) => {
        getGallery();
      }).catch((error) => {
        console.log('error in delete', error)
      })
    }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Favorite Animals</h1>
        </header>
        <p>Gallery goes here</p>
        <div className='gallery'>
        <RenderGalleryList GalleryItems={newGalleryImage} UpdatingLikeCount={updateLikes} GetID={setID} DeletePost={DeletePost}/>
        </div>
      </div>
    );
}

export default App;
