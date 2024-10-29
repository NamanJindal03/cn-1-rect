import React, { useState } from 'react'

export default function CreateAlbums({addAlbum}) {
    const [albumName, setAlbumName] = useState('')
    function handleAddAlbum(e){
        e.preventDefault()
        addAlbum({name: albumName});
        setAlbumName('')
    }
    function handleClearAlbum(){
        setAlbumName('')
    }
  return (
    <div>
        <h2>Create an album</h2>
        <form onSubmit={handleAddAlbum}>
            <input type="text" value={albumName} onChange={(e)=> setAlbumName(e.target.value)}/>
            <button onClick={handleClearAlbum}>clear</button>
            <button>create</button>
        </form>
    </div>
  )
}
