
import { useState } from "react";

function RegisterForm({ event }) {

    let initialField = { username: '', password: '', confirmPwd: '', email: '', contact: '', agree: false };
    let inputError = { usernameError: '', passwordError: '', confirmPwdError: '', emailError: '', contactError: '', agreeError: false };

    let [inputs, setInputs] = useState(initialField);
    let [isError, setIsError] = useState(inputError);

    function handleInputs(e) {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));

       
        if (e.target.name) {

            // Username Error
            if (inputs.username.length <= 6) {
                setIsError(prev => ({ ...prev, usernameError: "Username should contain more than 6 character." }))
            }
            else {
                setIsError(prev => ({ ...prev, usernameError: "" }))

            }

            // Password Error
            if (inputs.password.length <= 8) {
                setIsError(prev => ({ ...prev, passwordError: "Password should contain more than 8 character." }))
            }
            else {
                setIsError(prev => ({ ...prev, passwordError: "" }))

            }

            // Confirm Password Error
            if (inputs.password !== inputs.confirmPwd) {
                setIsError(prev => ({ ...prev, confirmPwdError: "Password isn't matched with given password." }))
            }
            else {
                setIsError(prev => ({ ...prev, confirmPwdError: "" }))

            }

            // // Email Error
            // if(inputs.email===""){
            //     setIsError(prev=>({...prev,emailError:""}))
            // }
            // else{
            //     setIsError(prev=>({...prev,emailError:""}))

            // }

            // Contact Error
            if (inputs.contact.length !== 10) {
                setIsError(prev => ({ ...prev, contactError: "Enter Contact number properly (10 digits)." }))
            }
            else {
                setIsError(prev => ({ ...prev, contactError: "" }))

            }

            // Agree Error
            if (inputs.agree === false) {
                setIsError(prev => ({ ...prev, agreeError: "You have to accept our terms & conditons." }))
            }
            else {
                setIsError(prev => ({ ...prev, agreeError: "" }))

            }



        }
    }

    function handleCheckBox(e) {
        setInputs(prev => ({ ...prev, agree: e.target.checked }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs);
        setInputs(initialField);
        setInputs(inputError);

    }



    return (
        <>

            <div className="card w-50 m-auto">
                <button className="btn btn-danger position-absolute top-0 end-0 m-1" onClick={event}><i className="bi bi-x-lg"></i></button>
                <div className="card-header text-center bg-dark text-white">
                    <h3>Register Form</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <label className="form-label">Enter username here:</label>
                        <input type="text" className="form-control my-2" name="username" onChange={handleInputs} value={inputs.username} placeholder="Enter username here..." />
                        {
                            isError.usernameError && <label className="form-label text-danger"><i class="bi bi-exclamation-circle"> {isError.usernameError}</i></label>
                        }
                        <br />

                        <label className="form-label">Enter Password here:</label>
                        <input type="password" className="form-control my-2" name="password" onChange={handleInputs} value={inputs.password} placeholder="Enter password here..." />
                        {
                            isError.passwordError && <label className="form-label text-danger"><i class="bi bi-exclamation-circle"> {isError.passwordError}</i></label>
                        }
                        <br />

                        <label className="form-label">Enter Password again for confirmation:</label>
                        <input type="password" className="form-control my-2" name="confirmPwd" onChange={handleInputs} value={inputs.confirmPwd} placeholder="Confirm password here..." />
                        {
                            isError.confirmPwdError && <label className="form-label text-danger"><i class="bi bi-exclamation-circle"> {isError.confirmPwdError}</i></label>
                        }
                        <br />

                        <label className="form-label">Enter Email here:</label>
                        <input type="email" className="form-control my-2" name="email" onChange={handleInputs} value={inputs.email} placeholder="Enter email here..." />

                        <label className="form-label">Enter Contact here:</label>
                        <input type="number" className="form-control my-2" name="contact" onChange={handleInputs} value={inputs.contact} placeholder="Enter contact here..." />
                        {
                            isError.contactError && <label className="form-label text-danger"><i class="bi bi-exclamation-circle"> {isError.contactError}</i></label>
                        }
                        <br />

                        <input type="checkbox" className="me-3" name="agree" onChange={handleCheckBox} checked={inputs.agree} />
                        <label className="form-label">  Agree terms & conditions.</label>
                        <br />
                        {
                            isError.agreeError && <label className="form-label text-danger"><i class="bi bi-exclamation-circle"> {isError.agreeError}</i></label>
                        }
                        <br />
                        <button type="submit" className="btn btn-warning my-3">Register Now</button>
                    </form>
                </div>
            </div>


        </>
    );
}
export default RegisterForm;