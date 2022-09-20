import {NavLink} from "react-router-dom"

const Navbar = ():JSX.Element =>{



    return <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/characters/all"}>Characters</NavLink>
    </nav>

}

export default Navbar