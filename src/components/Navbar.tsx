import {NavLink} from "react-router-dom"

const Navbar = ():JSX.Element =>{


    return <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/comics/all"}>Comics</NavLink>
    </nav>

}

export default Navbar