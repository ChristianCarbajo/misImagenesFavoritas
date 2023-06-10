import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { IoMdReturnLeft } from "react-icons/io";
import ApiPutService from "../../Services/ApiPutService/ApiPutService"
import ApiPostService from "../../Services/ApiPostService/ApiPostService"
import "./Form.css"




function Form() {
    const constUrl = "http://localhost:8080/api/v1/myfavoritesimages"
    const State = useLocation().state

    let [isSubmitted, setIsSubmitted] = useState(false)
    let [item, setItem] = useState(State ? State : {title: "", url: ""})



    const notify = () => toast('¡FotoCuqui guardada! ');


    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let temp_item = { ...item };
        if (value !== undefined) {
            temp_item[name] = value;
        }
        setItem(temp_item);
    }

    function handleSubmit(event) {
        event.preventDefault();
        State ? ApiPutService(constUrl, item, State.id) : ApiPostService(constUrl, item)
        notify()
        setIsSubmitted(true);
          
    }




    return (
        <div className='form'>
            <Toaster /> {isSubmitted ?
                <div className='return'>
                    <h2 className='return-h2'>Volver a la página de inicio</h2>
                    <Link to="/"><button className='b-return'><IoMdReturnLeft /></button></Link>
                </div> :
            <form onSubmit={handleSubmit} method="post">
                <div className='form-inputTitle'>
                    <input type="text" name='title' placeholder='TITLE' onChange={handleChange} defaultValue={State ? State.title : ""}  autoComplete="off" required />
                    <p>Escribe aquí tu Cuqui Título</p>
                </div>
                <div className='form-inputURL'>
                    <input type="url" name="url" onChange={handleChange} defaultValue={State ? State.url : ""} autoComplete="off" placeholder="URL" required pattern="https?://.+" />
                    <p>Pon la Url de la foto Aquí</p>
                </div>
                <button><span className='form-buttonText'>Pulsa aquí para subir tu foto</span></button>
            </form>}
        </div>
    )
}

export default Form;