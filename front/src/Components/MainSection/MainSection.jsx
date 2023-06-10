import './MainSection.css'
import { useEffect } from 'react';

function MainSection() {

    const url = "http://localhost:8080/api/v1/myfavoritesimages"
    const [data, setData] = useState([]);
  
    useEffect(() => {
      ApiGetService(url)
        .then((data) => setData(data))
        .catch((error) => console.error(error));
    }, []);


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
        State ? ApiPutService(url, item, State.id) : ApiPostService(url, item)
        notify()
        setIsSubmitted(true);
          
    }

    return (
        <div className='mainSection'>
            <form onSubmit={handleSubmit} method="post">
                    <div className='mainSection-inputTitle'>
                        <input type="text" placeholder='TITLE' />
                        <p>Escribe aquí tu Cuqui Título</p>
                    </div>
                    <div className='mainSection-inputURL'>
                        <input type="url" name="url" onChange={handleChange} defaultValue={data ? data.url: ""} autoComplete="off" placeholder="URL" required pattern="https?://.+" />
                        <p>Pon la Url de la foto Aquí</p>
                    </div>
                    <button>Pulsa aquí para subir tu foto</button>
            </form>
        </div>
    )

}

export default MainSection;