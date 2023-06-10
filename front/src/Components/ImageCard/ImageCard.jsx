import { Navigate, useNavigate } from 'react-router-dom'
import "./ImageCard.css"
import { useState } from 'react';
import { MdModeEditOutline } from "react-icons/md"
import { FaTrashAlt } from "react-icons/fa"



function ImageCard({id, title, url}){

    const [hover, setHover] = useState(false);
    let mode = hover ? "appear" : "notAppear"
    const toggleHover = () => {
      setHover(!hover);
    };
    let navigate = useNavigate() 


return(
<div className="imageCard">
    <h2>{title}</h2>
<div className='imageCard-container' onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
    <img className='imageCard-container-img' src={url} />
    {<div className={`image-icons ${mode}`}>
          <MdModeEditOutline className={`image-icon click`} color='#f0f0f0' size={100} />
          <FaTrashAlt  className={`image-icon click`} color='#f0f0f0' size={70} />
        </div>}
</div>
</div>

)
    
}

export default ImageCard 