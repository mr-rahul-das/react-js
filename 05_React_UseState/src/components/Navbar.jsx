import Button from "./Button";


function Navbar() {
    return(
        <nav className="navbar navbar-dark bg-dark p-3">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">Amazon</a>

                
                <Button name={"Login"} color={"btn-warning"}/>
            </div>

        </nav>
    )
}

export default Navbar;