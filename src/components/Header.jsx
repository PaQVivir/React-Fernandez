import LogoPapel from "./images/papelmaderalogo.png";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-danger bg-gradient p-4">
                <div className="col-md-6">
                    <Link to={"/"}><img src={LogoPapel} alt={"Papel Madera Logo"} width={70} /></Link>
                </div>
                <div className="col-md-6 text-end">
                    <Link to={"/"} className="text-decoration-none">Contacto</Link> | <Link to={"/"} className="text-decoration-none">Tienda</Link>
                </div>
                <div className="col-md-6 text-end">
                    <NavBar />
                </div>
                <div className="col-md-6 text-end">
                    <CartWidget />
                </div>
            </div>

        </div>
    )
}

export default Header;
