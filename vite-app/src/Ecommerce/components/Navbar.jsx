import React, { useContext } from 'react';
import Button from './Button';
import { Link, NavLink } from 'react-router-dom';


function Navbar() {

    function pageNavigation({ isActive }) {
        isActive ? " active" : "";

    }


    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary p-3" data-bs-theme="dark">
                <div className="container-fluid align-item-center">
                    <Link to="/" className="navbar-brand">🛒 Ecom App</Link>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className={`nav-link ${pageNavigation}`} to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${pageNavigation}`} to="/fakeStore-items">FakeStoreItems</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${pageNavigation}`} to="/dummyJson-items">DummyJsonItems</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${pageNavigation}`} to="/cart">Cart</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${pageNavigation}`} to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${pageNavigation}`} to="/contact">Contact Us</NavLink>

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