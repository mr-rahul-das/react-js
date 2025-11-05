import Vijay from "../assetes/Vijay.jpg";

function Card() {
    return (
       
            <div className="row m-3">
                <div className="col-3 p-3">
                    <div className="card shadow">
                        <div className="card-header">
                            <img className="img-fluid" src="https://wallpapercave.com/wp/wp12122718.jpg" alt="#" />
                        </div>
                        <div className="card-body">
                            <h3>Name: Virat Kohli</h3>
                            <p>
                                " AbsolutePath "
                            </p>

                            <button className="btn btn-primary">Like <i className="bi bi-hand-thumbs-up"></i></button>

                        </div>
                    </div>
                </div>

                <div className="col-3 p-3">
                    <div className="card shadow">
                        <div className="card-header">
                            <img className="img-fluid" src={require('../assetes/CR7.jpg')} alt="#" />
                        </div>
                        <div className="card-body">
                            <h3>Name: CR7</h3>
                            <p>
                                " require(used only in CRA) "
                            </p>

                            <button className="btn btn-primary">Like <i className="bi bi-hand-thumbs-up"></i></button>

                        </div>
                    </div>
                </div>
                <div className="col-3 p-3">
                    <div className="card shadow">
                        <div className="card-header">
                            <img className="img-fluid" src="/Spiderman.jpg" alt="#" />
                        </div>
                        <div className="card-body">
                           <h3>Name: SpiderMan</h3>
                            <p>
                                " from public "
                            </p>

                            <button className="btn btn-primary">Like <i className="bi bi-hand-thumbs-up"></i></button>

                        </div>
                    </div>
                </div>
                <div className="col-3 p-3">
                    <div className="card shadow">
                        <div className="card-header">
                            <img className="img-fluid" src={Vijay} alt="#" />
                        </div>
                        <div className="card-body">
                            <h3>Name: Vijay</h3>
                            <p>
                                " Import(mostly used) "
                            </p>

                            <button className="btn btn-primary">Like <i className="bi bi-hand-thumbs-up"></i></button>

                        </div>
                    </div>
                </div>




            </div>



    )
}

export default Card;