const Item = ({item}) => {
    return (
        <>
            <div className="card border border-0">
                <img src={item.imagen} class="card-img-top" alt={item.titulo} />
                <div className="card-body">
                    <h3>{item.titulo}</h3>
                    <p className="card-text">{item.descripcion} <br /> <b>${item.precio}</b></p>
                </div>
            </div>
        </>

    )

}

export default Item; 