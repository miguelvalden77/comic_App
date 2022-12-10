import bg1 from "../assets/wallpaper_1.webp"
import bg2 from "../assets/wallpaper_2.jpeg"
import bg3 from "../assets/wallpaper_3.jpg"
import bg4 from "../assets/wallpaper_4.jpg"
import bg5 from "../assets/wallpaper_5.jpg"
import bg6 from "../assets/wallpaper_6.jpg"

// Estilos
import Carousel from 'react-bootstrap/Carousel'
import { useMediaQuery } from 'react-responsive'


const Home = ():JSX.Element =>{

  const isBigScreen = useMediaQuery({ query: '(min-width: 820px)' })

    return <main className="home-body">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src={isBigScreen ? bg1 : bg4}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src={isBigScreen ? bg2 : bg5}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src={isBigScreen ? bg3 : bg6}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </main>

}

export default Home