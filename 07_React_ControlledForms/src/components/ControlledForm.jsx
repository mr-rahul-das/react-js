import { useState } from "react";

function ControlledForm() {

    let [username, setUsername] = useState("");
    function handleUsername(e) {
        setUsername(e.target.value);

    }


    let [password, setPassword] = useState("");
    function handlePassword(e) {
        setPassword(e.target.value);

    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            <div className="row">
                <div className="col-md-6 m-auto my-3">
                    <form action="#" className="form-control p-3 shadow" onSubmit={handleSubmit}>
                        <lable className="input-group">Enter username:</lable>
                        <input onChange={handleUsername} value={username} type="text" className="form-control my-3" placeholder="Enter username here..." />
                        
                        <lable className="input-group">Enter password:</lable>
                        <input onChange={handlePassword} value={password} type="password" className="form-control my-3" placeholder="Enter password here..." />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="text-center">
                    <h2>User Name: {username}</h2>
                    <h2>Password: {password}</h2>
                </div>
            </div>
        </>
    );
}
export default ControlledForm;