import React, {useState} from 'react'

export default function CreateImage({image, imageIndex, albumIndex, addImage, updateImage}) {
  // let dataImageName = '';
  // let dataImageUrl = '';
  // if(image){
  //   dataImageName = image.name;
  //   dataImageUrl = image.url;
  // }
  const [imageName, setImageName] = useState(()=> image ? image.name: '')
  const [imageUrl, setImageUrl] = useState(()=> image ? image.imageUrl: '')
    function handleAddImage(e){
        e.preventDefault()
        if(image){
          updateImage(albumIndex, imageIndex, {name: imageName, imageUrl})
        }
        else{
          addImage(albumIndex, {name: imageName, imageUrl});
        }
        handleClearImage();
    }
    function handleClearImage(){
      setImageName('');
      setImageUrl('');
    }
  return (
    <div>
        <h2>Create an album</h2>
        <form onSubmit={handleAddImage}>
            <input type="text" value={imageName} onChange={(e)=> setImageName(e.target.value)}/>
            <input type="text" value={imageUrl} onChange={(e)=> setImageUrl(e.target.value)}/>
            <button onClick={handleClearImage}>clear</button>
            <button>create</button>
        </form>
    </div>
  )
}
