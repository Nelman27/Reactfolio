import React from 'react'
import photo from '../images/photo.jpg';

function Imagen() {
  return (
    <div className="ml-3 mt-1 mr-2 w-auto h-auto">
      <div className="ml-3 w-56 h-56">
        <img className="border-2 border-black rounded-lg w-48 h-48 ml-2 mr-4 object-fit-cover " src={photo} />
    </div>
    </div>
  )
}

export default Imagen
