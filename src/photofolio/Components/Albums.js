import React, {useState} from 'react'
import CreateAlbums from './CreateAlbums'
import DisplayAlbums from './DisplayAlbums'

export default function Albums({albums, addAlbum, selectAnAlbum}) {
    const [isCreateAlbum, setIsCreateAlbum] = useState(false)
    function toggleCreateAlbum(){
        setIsCreateAlbum(!isCreateAlbum);
    }
  return (
    <section className='section-common-class'>
        {isCreateAlbum && <CreateAlbums addAlbum={addAlbum}/>}
        <DisplayAlbums 
            albums={albums} 
            isCreateAlbum={isCreateAlbum} 
            toggleCreateAlbum={toggleCreateAlbum}
            selectAnAlbum={selectAnAlbum}
        />
    </section>
  )
}
