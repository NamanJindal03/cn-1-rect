import React, {useState} from 'react'
import CreateImage from './CreateImage';
import ImageCard from './ImageCard';
export default function Album({album}) {
    const {images} = album

    const [isCreateImage, setIsCreateImage] = useState(false)
    function toggleCreateImage(){
        setIsCreateImage(!isCreateImage);
    }
  return (
    <>
        {isCreateImage && <CreateImage/>}
        <nav className='imageNavbar section-common-class'>
            <span>Back</span>
            <h3>
                {images ? 
                `Images in ${album.name}`: 
                'No Images found in the album.'}
            </h3> 
            <button onClick={toggleCreateImage}>{isCreateImage ? 'cancel': 'Add Image'}</button>
        </nav>
        { images.length>0 &&
        <section className='section-common-class'>
            {
                images.map((img)=>{
                    return <ImageCard img={img}/>
                })
            }
        </section>
        }
        
    </>
  )
}
