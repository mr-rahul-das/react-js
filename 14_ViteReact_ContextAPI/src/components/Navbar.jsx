import React, { useContext } from 'react';
import Button from './Button';

import themeContext from './CreateTheme';

function Navbar() {
    
    let {isDark}=useContext(themeContext);
    return (
        <>

            <nav className={`navbar navbar-dark ${isDark?"bg-dark text-white":"bg-primary"} p-3`}>
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">To-Do List</a>


                    <div className="d-flex gap-2 ms-auto">
                        <Button color={"btn-warning"} name={"Login"}/>
                        
                    </div>

                </div>

            </nav>

        </>
    )
}

export default Navbar;