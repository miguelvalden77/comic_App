import bg1 from "../assets/wallpaper_marvel_1.jpg"
// Estilos
import Carousel from 'react-bootstrap/Carousel';


const Home = ():JSX.Element =>{


    return <main className="home-body">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg1}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </main>

}

export default Home