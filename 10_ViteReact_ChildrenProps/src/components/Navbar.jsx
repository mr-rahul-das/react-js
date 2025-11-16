import React from 'react'
import Button from './Button';

function Navbar({children}) {
    return (
        <>

            <nav className="navbar navbar-dark bg-dark p-3">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">MoviesClub</a>


                    <div className="d-flex gap-2 ms-auto">
                        {
                            children
                        }
                        
                    </div>

                </div>

            </nav>

        </>
    )
}

export default Navbar;