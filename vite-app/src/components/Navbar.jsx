import React, { useContext } from 'react';
import Button from './Button';
import { Link, NavLink } from 'react-router-dom';


function Navbar() {

    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary p-3" data-bs-theme="dark">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">E-Comm</a>
                    

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className='nav-link' to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive ? "nav-link text-danger active":"nav-link"} to="/cart" >Cart </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="d-flex gap-2 ms-auto">
                        <Button color={"btn-warning"} name={"Login"} />

                    </div>

                </div>

            </nav>

        </>
    )
}

export default Navbar;