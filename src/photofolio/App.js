import React, { useEffect, useState } from 'react'
// import { albumsData } from './constants/albumData';
import Navbar from './Components/Navbar';
import Albums from './Components/Albums';
import Album from './Components/Album';
import './style/style.css'
import { db } from './firebase_init';
import { collection, query, getDocs, addDoc, doc, updateDoc, deleteField, arrayRemove, arrayUnion } from "firebase/firestore";

export default function App() {
    const [albums, setAlbums] = useState([]);
    const [selectedAlbumIndex, setSelectedAlbumIndex] = useState('');

    useEffect(()=>{
        getAlbumsFromDb();
    },[albums]);

    async function getAlbumsFromDb(){
        const q = query(collection(db, "album"));
        const data = await getDocs(q);
        setAlbums(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        
        // const querySnapshot = await getDocs(q);
        // console.log(querySnapshot.docs);
        // querySnapshot.forEach((doc)=>{
        //     console.log(doc.data());
        // })
        // console.log(albumDbData)
    }

    async function addAlbum(newAlbum){
        const docRef = await addDoc(collection(db, "album"), newAlbum);
        const tempAlbum = {images:[], ...newAlbum, id: docRef.id};
        setAlbums([...albums, tempAlbum])
    }
    function selectAnAlbum(albumindex){
        setSelectedAlbumIndex(albumindex)
    }
    async function deleteImage(albumIndex, imageIndex){
        console.log(albumIndex);
        console.log(imageIndex);
        const albumRef = doc(db, 'album', albums[albumIndex].id);
        console.log(albumRef)
        console.log(albums[albumIndex].images[imageIndex].name)
        await updateDoc(albumRef, {
            images: arrayRemove(albums[albumIndex].images[imageIndex])
        });
        //api part 
        const albumImageToBeDeleted = albums[albumIndex];
        albumImageToBeDeleted.images.splice(imageIndex, 1);
        setAlbums(JSON.parse(JSON.stringify(albums)));

    }

    async function addImage(albumIndex, data){
        const albumRef = doc(db, 'album', albums[albumIndex].id);
        await updateDoc(albumRef, {
            images: arrayUnion(data)
        });
        setAlbums([...albums])
    }
    async function updateImage(albumIndex, imageIndex, data){
        const prevImage = albums[albumIndex].images[imageIndex]
        const albumRef = doc(db, 'album', albums[albumIndex].id);
        await updateDoc(albumRef, {
            images: arrayRemove(prevImage)
        });
        await updateDoc(albumRef, {
            images: arrayUnion(data)
        });
        setAlbums([...albums])
    }

    function backBtn(){
        console.log('coming over here')
        setSelectedAlbumIndex('');
    }
  return (
    <>

        <Navbar />
        {
            (selectedAlbumIndex || selectedAlbumIndex===0) ? 
                <Album 
                    album={albums[selectedAlbumIndex]} 
                    albumIndex={selectedAlbumIndex} 
                    deleteImage={deleteImage}
                    backBtn={backBtn}
                    addImage= {addImage}
                    updateImage={updateImage}
                /> :
                <Albums albums={albums} addAlbum={addAlbum} selectAnAlbum={selectAnAlbum} />
        }
        
    </>
  )
}
