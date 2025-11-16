import React from 'react'
import Button from './Button';

function MoviesList({item}) {
  return (
    <>
    <div className="col-3">
        <div className="card m-3">
            <div className="card-header">
                <img className='img-fluid' src={item.img} alt="#" />
            </div>
            <div className="card-body">
                <h3>Name: {item.name}</h3>
                <h4>Actor: {item.actor}</h4>
                <h4>Rating: {item.rating} <i className="bi bi-star-fill"></i></h4>

            </div>
            <div className="card-footer text-center">
                <Button color={"btn-danger"}>
                    {
                        "Add to watchlist"
                    }
                </Button>
            </div>
        </div>
    </div>
    </>
  )
}

export default MoviesList;