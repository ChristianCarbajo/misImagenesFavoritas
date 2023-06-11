
import "./ImageCard.css"
import { useState } from "react";
import { MdModeEditOutline } from "react-icons/md"
import { FaTrashAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import Confirmation from '../Confirmarion/Confirmation';
import ApiDeleteService from '../../Services/ApiDeleteService/ApiDeleteService'




function ImageCard({ id, title, url }) {

  const constUrl = "http://localhost:8080/api/v1/myfavoritesimages"
  const [confirmation, setConfirmation] = useState(false)
  const [typeConfirmation, setTypeConfirmation] = useState("")


  let navigate = useNavigate()


  const [hover, setHover] = useState(false);
  let mode = hover ? "appear" : "notAppear"
  const toggleHover = () => {
    setHover(!hover);
  };


  function handleDelete() {
    ApiDeleteService(constUrl, id)
      .then(() => window.location.reload())
      .catch((error) => console.error(error));
    setConfirmation(false)

  }

  function handleClose() {
    setConfirmation(false)
  }

  function handleClickDelete() {
    setConfirmation(true)
    setTypeConfirmation("delete")
  }


  return (
    <div className="imageCard">
      {confirmation && <Confirmation type={typeConfirmation} handleAction={typeConfirmation == "delete" && handleDelete} handleClose={handleClose} />}
      <h5>{title}</h5>
      <div className='imageCard-container' onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <img className='imageCard-container-img' src={url} />
        {<div className={`image-icons ${mode}`}>
          <MdModeEditOutline onClick={() => { navigate("/form", { state: { id: id, title: title, url: url } }) }} className={`image-icon click`} color='#f0f0f0' size={100} />
          <FaTrashAlt onClick={() => { handleClickDelete() }} className={`image-icon click`} color='#f0f0f0' size={70} />
        </div>}
      </div>
    </div>

  )

}

export default ImageCard 