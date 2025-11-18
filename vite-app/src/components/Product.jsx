import React from 'react'

function Product({ data }) {
    return (

        <>
            <section className="container-fluid mt-5">
                <div className="row">

                    {
                        data.map((prod) => (
                            <div className="col-3 mb-4" key={prod.id}>
                                <div className="card shadow">
                                    <div className="card-header">
                                        <img style={{height:'300px' , width:"500px"}} className='img-fluid' src={prod.image} alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h3>Title: <i>{prod.title}</i></h3>
                                        <h4>Description: </h4>
                                        <span>{prod.description}</span>
                                        <h3>Category: {prod.category}</h3>
                                        <h3>Price: $ {prod.price}</h3>
                                        <h3>Rating: {prod.rating.rate} <i className="bi bi-star-fill"></i></h3>
                                    </div>
                                    <div className="card-footer text-center">
                                        <button className="btn btn-dark">Buy Now</button>

                                    </div>
                                </div>
                            </div>
                        ))
                    }





                </div>
            </section>

        </>
    )
}

export default Product