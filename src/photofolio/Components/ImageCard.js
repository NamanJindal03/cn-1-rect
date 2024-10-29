import React from 'react'

export default function ImageCard({img}) {
  return (
    <div className='imageCardContainer'>
        <img src={img.imageUrl} alt="" className='cardImgImg' />
        <div className='cardImgThumbnail'>{img.name}</div>

        {/* absolute buttons */}
        <button className='circleButton editButton'>E</button>
        <button className='circleButton deleteButton'>D</button>
    </div>
  )
}
