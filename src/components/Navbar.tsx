import {NavLink} from "react-router-dom"
import marvel_logo from "../assets/marvel-logo.png"


const Navbar = ():JSX.Element =>{

    return <nav className="navbar">
        <div className="logo-container">
            <img src={marvel_logo} alt="marvel logo" />
        </div>

        <div className="nav-container">
            <NavLink className={"link"} to={"/"}>Home</NavLink>
            <NavLink className={"link"} to={"/characters/all"}>Characters</NavLink>
        </div>
    </nav>

}

export default Navbar