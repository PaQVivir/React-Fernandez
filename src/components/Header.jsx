import LogoPapel from "./images/papelmaderalogo.png"
import NavBar from "./NavBar"
import CartWidget from "./CartWidget"

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-danger bg-gradient p-4">
                <div className="col-md-6">
                    <img src={LogoPapel} alt={"Papel Madera Logo"} width={70} />
                </div>
                <div className="col-md-6 text-end">
                    <a href="#" className="text-decoration-none">Contacto</a> | <a href="#" className="text-decoration-none">Tienda</a>
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
