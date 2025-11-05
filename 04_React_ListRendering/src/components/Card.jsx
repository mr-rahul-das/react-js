

function Card({data}) {
    let {name,id,city}=data;
    return (

        <div className="col-3 p-3">
            <div className="card shadow">
                <div className="card-header">
                    <h2>Student Details</h2>
                </div>
                <div className="card-body">
                    <h3>Name: {name}</h3>
                    <h4>Id: {id}</h4>
                    <h4>City: {city}</h4>
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