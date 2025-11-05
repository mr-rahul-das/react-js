import HWButton from "./HWButton";

function HWNavbar() {

    return (
        <nav className="navbar navbar-dark bg-dark p-3">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">Amazon</a>
                <HWButton name={"Log In"} color={"btn-warning"} />

            </div>
        </nav>
    );
}
export default HWNavbar;