import Button from "./Button";


function Navbar({event}) {

    return(
        <nav className="navbar navbar-dark bg-dark p-3">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">Amazon</a>

                
                <div className="d-flex gap-2 ms-auto">
                    <Button handleClicked={()=>event("login") } name={"Login"} color={"btn-warning"}/>
                <Button handleClicked={()=>event("register")} name={"Register Now"} color={"btn-primary"}/>
                </div>
            
            </div>

        </nav>
    )
}

export default Navbar;