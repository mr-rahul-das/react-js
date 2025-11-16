import Button from "./Button";

function Navbar() {

    return(
        <nav className="navbar navbar-dark bg-dark p-3">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">Uncontrolled Forms</a>

                
                <div className="d-flex gap-2 ms-auto">
                    <Button color="btn-warning" name="Login"/>
                </div>
            
            </div>

        </nav>
    )
}

export default Navbar;