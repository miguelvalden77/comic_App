import bg1 from "../assets/wallpaper_1.webp"
import bg2 from "../assets/wallpaper_2.jpeg"
import bg3 from "../assets/wallpaper_3.jpg"
// Estilos
import Carousel from 'react-bootstrap/Carousel'


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
          src={bg2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </main>

}

export default Home