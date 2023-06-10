import './MainSection.css'
import { useEffect, useState } from 'react';
import ApiGetService from "../../Services/ApiGetService/ApiGetService"
import { Link } from 'react-router-dom';
import ImageCard from '../ImageCard/ImageCard';

function MainSection() {

  const url = "http://localhost:8080/api/v1/myfavoritesimages"
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiGetService(url)
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);



  return (
    <div className='mainSection'>
      <div className='addRecipe'>
        <Link to="/Form"><button className='addRecipeButton'>Añade una receta</button></Link>
      </div>
      <div className='mainSection-ImageCards'>
        {data.map((item) => (
          <ImageCard key={item.id} title={item.title} url={item.url} id={item.id} />
        ))}
      </div>

    </div>
  )

}

export default MainSection;