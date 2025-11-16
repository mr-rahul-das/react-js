import { useState } from "react";

function LoginForm({event}) {

    let initialField = { username: '', password: '' };
    let [inputs, setInputs] = useState(initialField);

    function handleInputs(e) {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs);
        setInputs(initialField);

    }

    return (
        <>

            <div className="card w-50 m-auto">
                <button className="btn btn-danger position-absolute top-0 end-0 m-1" onClick={event}><i className="bi bi-x-lg"></i></button>
                <div className="card-header text-center bg-dark text-white">
                    <h3>Login Form</h3>
                </div>
                <div className="card-body">
                    <form action="#" onSubmit={handleSubmit}>
                        <label className="form-label">Enter username here:</label>
                        <input type="text" className="form-control my-2" name="username" onChange={handleInputs} value={inputs.username} placeholder="Enter username here..." />
                        <label className="form-label text-danger"><i class="bi bi-exclamation-circle"> Please enter correct username</i></label>
                        <br />  
                        <label className="form-label">Enter Password here:</label>
                        <input type="password" className="form-control my-2" name="password" onChange={handleInputs} value={inputs.password} placeholder="Enter password here..." />


                        <button type="submit" className="btn btn-warning my-3">Log in</button>
                    </form>
                </div>
            </div>

        </>
    );
}
export default LoginForm;   