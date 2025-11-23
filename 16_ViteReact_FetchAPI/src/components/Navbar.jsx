import React, { useContext } from 'react';
import Button from './Button';


function Navbar({input,handleSearch}) {
    
    return (
        <>

            <nav className={`navbar navbar-dark bg-dark p-3`}>
                <div className="container-fluid align-item-center">
                    <a href="#" className="navbar-brand">Fetch data from API</a>
                    <div className=" w-25">
                        <input type="text" className="form-control" placeholder='Search here...' value={input} onChange={handleSearch} />
                    </div>


                    <div className="d-flex gap-2 ms-auto">
                        <Button color={"btn-warning"} name={"Login"}/>
                        
                    </div>

                </div>

            </nav>

        </>
    )
}

export default Navbar;