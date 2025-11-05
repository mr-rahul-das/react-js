

function Card({name,image}) {
    return (

        <div className="col-3 p-3">
            <div className="card shadow">
                <div className="card-header">
                    <img className="img-fluid" src={image} alt="#" />
                </div>
                <div className="card-body">
                    <h3>Name:{name}</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, est. Magnam, ea. Maiores beatae inventore et nostrum magnam.
                    </p>

                    <button className="btn btn-primary">Like <i className="bi bi-hand-thumbs-up"></i></button>

                </div>
            </div>
        </div>

    )
}

export default Card;