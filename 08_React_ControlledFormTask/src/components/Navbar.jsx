

function Navbar({event}) {

    return(
        <nav className="navbar navbar-dark bg-dark p-3">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">Controlled Forms</a>

                
                <div className="d-flex gap-2 ms-auto">
                    <button className="btn btn-warning" onClick={event.handleLogin}>Login</button>
                    <button className="btn btn-primary" onClick={event.handleRegister}>Register</button>
                </div>
            
            </div>

        </nav>
    )
}

export default Navbar;