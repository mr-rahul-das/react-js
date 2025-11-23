import React from 'react'
import Loading from './Loading'

function Cart({ cart,removeFromCart }) {
    return (
        <>
            <div className="container-fluid mt-3">
                <div className="row">
                    {
                        cart.length > 0 ? cart.map(prod => (
                            <div className="col-3 mb-4" key={prod.id}>
                            <div className="card shadow">
                                <div className="card-header" >
                                    <img style={{ height: '300px', width: "500px" }} className='img-fluid' src={prod.image} alt="#" />
                                </div>
                                <div className="card-body" >
                                    <h5>Title: <i>{prod.title}</i></h5>
                                    <h6>Price: $ {prod.price}</h6>
                                    <span>
                                        <b>Quanrity:
                                            <button className="btn">-</button>
                                            {
                                                prod.qty
                                            }
                                            <button className="btn">+</button>
                                        </b>
                                    </span>
                                </div>
                                <div className="card-footer d-flex justify-content-evenly">
                                    <button className="btn btn-danger shadow" onClick={()=>removeFromCart(prod)}>Remove from cart</button>
                                    <button className="btn btn-dark">Buy Now</button>

                                </div>
                            </div>
                        </div>
                            ))
                            :
                            <>
                                <h3>Your cart is empty!! 🛒</h3>
                                <h5>Add items to your cart....</h5>
                                <h2><i>Try out our new features: </i></h2>
                                <Loading/>
                            </>
                    }

                </div>
            </div>
        </>
    )
}

export default Cart