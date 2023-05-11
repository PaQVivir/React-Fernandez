import Carro from "./images/cart-outline.svg"

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-light">
            <img src={Carro} alt="Carrito de compra" width={25} />
            <span className="badge text-bg-danger">2</span>
        </button>
    )
}

export default CartWidget;