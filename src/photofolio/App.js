import React, { useState } from 'react'
import { albumsData } from './constants/albumData';
import Navbar from './Components/Navbar';
import Albums from './Components/Albums';
import Album from './Components/Album';
import './style/style.css'

export default function App() {
    const [albums, setAlbums] = useState(albumsData);
    const [selectedAlbumIndex, setSelectedAlbumIndex] = useState('');

    function addAlbum(newAlbum){
        const tempAlbum = {images:[], ...newAlbum, id: Date.now()};
        setAlbums([...albums, tempAlbum])
    }
    function selectAnAlbum(albumindex){
        setSelectedAlbumIndex(albumindex)
    }

  return (
    <>

        <Navbar />
        {
            (selectedAlbumIndex || selectedAlbumIndex===0) ? 
                <Album album={albums[selectedAlbumIndex]}/> :
                <Albums albums={albums} addAlbum={addAlbum} selectAnAlbum={selectAnAlbum}/>
        }
        
    </>
  )
}
