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

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <RenderGalleryList GalleryItems={newGalleryImage}/>
        <button>Like</button>
        {/* here i will input the put request header to show how many likes. */}
      </div>
    );
}

export default App;
