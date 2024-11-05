import React, {useState} from 'react'
import CreateImage from './CreateImage';
import ImageCard from './ImageCard';
export default function Album({album, albumIndex, deleteImage, backBtn, addImage, updateImage}) {
    const {images} = album;

    const [editImageIndex, setEditImageIndex] = useState(-1);

    const [isCreateImage, setIsCreateImage] = useState(false)
    function toggleCreateImage(){
        setIsCreateImage(!isCreateImage);
    }
    function selectImageIndex(index){
        setEditImageIndex(index);
    }
  return (
    <>
        {(isCreateImage || editImageIndex != -1) && <CreateImage image={images[editImageIndex]} imageIndex={editImageIndex} albumIndex={albumIndex} addImage={addImage} updateImage={updateImage}/>}
        <nav className='imageNavbar section-common-class'>
            <span onClick={backBtn}>Back</span>
            <h3>
                {images?.length > 0 ? 
                `Images in ${album.name}`: 
                'No Images found in the album.'}
            </h3> 
            <button onClick={toggleCreateImage}>{isCreateImage ? 'cancel': 'Add Image'}</button>
        </nav>
        { images?.length>0 &&
        <section className='section-common-class'>
            {
                images?.map((img, index)=>{
                    return <ImageCard key={index} img={img} deleteImage={deleteImage} albumIndex={albumIndex} imageIndex={index} selectImageIndex={selectImageIndex}/>
                })
            }
        </section>
        }
        
    </>
  )
}
