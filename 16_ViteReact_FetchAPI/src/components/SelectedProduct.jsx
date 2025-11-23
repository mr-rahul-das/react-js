import React from 'react'

function SelectedProduct({ prod, handleClose }) {
    return (
        <>
            <div className="d-flex justify-content-center align-items-start top-0 start-0 vh-100 vw-100 position-fixed overflow-auto z-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
                <div className="card w-50 shadow m-5">
                    <div className="card-header position-relative">
                        <img className='img-fluid' src={prod.image} alt="" />
                        <button className="btn btn-close position-absolute top-0 end-0 m-2" onClick={handleClose}></button>
                    </div>
                    <div className="card-body">
                        <h3>Title: <i>{prod.title}</i></h3>
                        <h5>Description: </h5>
                        <p style={{ textAlign: "justify" }}>{prod.description}</p>
                        <h4>Category: {prod.category}</h4>
                        <h4>Price: $ {prod.price}</h4>
                        <h5>Rating: {prod.rating.rate} <i className="bi bi-star-fill"></i></h5>
                    </div>
                    <div className="card-footer text-center">
                        <button className="btn btn-dark">Buy Now</button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default SelectedProduct