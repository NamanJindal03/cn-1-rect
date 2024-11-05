import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ImageCard({img, deleteImage, albumIndex, imageIndex, selectImageIndex}) {
  function deleteImageLocal(){
    deleteImage(albumIndex, imageIndex)
    toast.success('🦄 Wow so easy!');
  }

  
  return (
    <>
      <div className='imageCardContainer'>
          <img src={img.imageUrl} alt="" className='cardImgImg' />
          <div className='cardImgThumbnail'>{img.name}</div>

          {/* absolute buttons */}
          <button className='circleButton editButton' onClick={()=> selectImageIndex(imageIndex)}>E</button>
          <button className='circleButton deleteButton' onClick={deleteImageLocal}>D</button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}
