import React, { useState } from 'react'
import styles from '../style/DisplayAlbum.module.css'
import AlbumCard from './AlbumCard'
import CreateAlbums from './CreateAlbums'

export default function DisplayAlbums({albums, isCreateAlbum, toggleCreateAlbum, selectAnAlbum}) {
  return (
    <div>
        
        <div className={styles.displayAlbumHeader}>
            <span>Your albums</span>
            <button onClick={toggleCreateAlbum}>{isCreateAlbum ? 'Cancel': 'Create Album'}</button>
        </div>
        <div className={styles.albumGrid}>
            {
                albums.map((album, index)=>{
                    return (
                        <AlbumCard 
                            album={album} 
                            key={album.id} 
                            index={index}
                            selectAnAlbum={selectAnAlbum}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}
