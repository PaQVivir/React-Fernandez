import Facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import pinterest from "./images/pinterest.svg";
import whatsapp from "./images/whatsapp.svg";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="container-fluid text-light bg-danger bg-gradient p-4 py-5">
            <div className="row ">
                <div className="col-md-2">
                    <h5>Direccion</h5>
                    <li>Adolfo Calle 519</li>
                    <li>Zona Comercial</li>
                    <li>Guaymallen - Mendoza</li>
                </div>
                <div className="col-md-2">
                    <h5>Nuestros Horarios</h5>
                    <li> Lunes a Viernes de 09:00 a 18:00</li>
                    <li> Sabados de 9:00 a 13:00</li>
                    <li> Domingos Cerrado</li>
                </div>
                <div className="col-md-2">
                    <h5>Nuestra Historia</h5>
                </div>
                <div className="col-md-2">
                    <h5>Ofertas <Link to={"#"}></Link></h5>
                </div>
                <div className="col-md-4 text-end">
                    <Link to={"https://www.facebook.com/papel.madera.5832"} target={"_blank"}> <img src={Facebook} alt={"Facebook"} width={30} /></Link>
                    <Link to={"https://www.instagram.com/papelmaderamza/"} target={"_blank"}> <img src={instagram} alt={"Instagram"} width={30} /></Link>
                    <Link to={"https://ar.pinterest.com/papelmaderamza/"} target={"_blank"}> <img src={pinterest} alt={"Pinterest"} width={30} /></Link>
                    <Link to={"https://api.whatsapp.com/send/?phone=5492613671345&text&type=phone_number&app_absent=0"} target={"_blank"}> <img src={whatsapp} alt={"Whatsapp"} width={30} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;