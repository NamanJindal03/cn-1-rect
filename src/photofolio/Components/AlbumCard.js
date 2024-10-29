import React from 'react'
import Style from '../style/DisplayAlbum.module.css'
import defaultAlbumImg from '../assets/images/defaultAlbumImg.png'

export default function AlbumCard({album, index, selectAnAlbum}) {
  return (
    <div className={Style.albumCard} onClick={()=> selectAnAlbum(index)}>
        <div className={Style.albumCardImgContainer}>
            <img src={album.albumImg ? album.albumImg : defaultAlbumImg} alt="" className={Style.albumImg}/>
        </div>
        <div className={Style.imgThumbnail}>
            {album.name}
        </div>
    </div>
  )
}
