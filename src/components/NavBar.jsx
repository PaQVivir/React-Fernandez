import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (

        <ul className="nav d-flex justify-content-end">
            <li className="nav-item">
                <NavLink className="nav-link active text-dark" aria-current="page" to={"/"}>Inicio</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" to={"/category/Racks"}>Racks</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" to={"/category/Mesas"}>Mesas</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" to={"/category/Respaldo"}>Respaldares</NavLink>
            </li>
        </ul>


    )
}

export default NavBar;