
import { useState } from "react";

function RegisterForm() {

    let initialField = { username: '', password: '', confirmPwd: '', email: '', contact: '', agree: false };
    let [inputs, setInputs] = useState(initialField);

    function handleInputs(e) {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    function handleCheckBox(e) {
        setInputs(prev => ({ ...prev,agree: e.target.checked }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs);
        setInputs(initialField);

    }




    return (
        <>

            <div className="card w-50 m-auto">
                <div className="card-header text-center bg-dark text-white">
                    <h3>Register Form</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <label className="input-group">Enter username here:</label>
                        <input type="text" className="form-control my-2" name="username" onChange={handleInputs} value={inputs.username} placeholder="Enter username here..." />

                        <label className="input-group">Enter Password here:</label>
                        <input type="password" className="form-control my-2" name="password" onChange={handleInputs} value={inputs.password} placeholder="Enter password here..." />

                        <input type="password" className="form-control my-2" name="confirmPwd" onChange={handleInputs} value={inputs.confirmPwd} placeholder="Confirm password here..." />

                        <label className="input-group">Enter Email here:</label>
                        <input type="email" className="form-control my-2" name="email" onChange={handleInputs} value={inputs.email} placeholder="Enter email here..." />

                        <label className="input-group">Enter Contact here:</label>
                        <input type="number" className="form-control my-2" name="contact" onChange={handleInputs} value={inputs.contact} placeholder="Enter contact here..." />

                        <input type="checkbox" className="me-3" name="agree" onChange={handleCheckBox} checked={inputs.agree} />
                        <label>  Agree terms & conditions.</label>
                        <br />
                        <button type="submit" className="btn btn-warning my-3">Register Now</button>
                    </form>
                </div>
            </div>


        </>
    );
}
export default RegisterForm;