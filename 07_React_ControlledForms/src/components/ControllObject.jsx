import { useState } from "react";

function ControllObject() {

    let [inputs, setInputs] = useState({ username: '', password: '' });
    function handleInputs(e) {
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    // function handlePassword(e){
    //     setInputs(prev=>({...prev,username:e.target.value}))

    // }

    // function handleUsername(e){
    //     setInputs(prev=>({...prev,password:e.target.value}))
    // }




    function handleSubmit(e){
        e.preventDefault();
       
    }


    return (
        <>

            <div className="row">
                <div className="col-md-6 m-auto my-3">
                    <form action="#" className="form-control p-3 shadow" onSubmit={handleSubmit}>
                        <h3>Form Field</h3>
                        <lable className="input-group">Enter username:</lable>
                        <input name="username" onChange={handleInputs} value={inputs.username} type="text" className="form-control my-3" placeholder="Enter username here..." />

                        <lable className="input-group">Enter password:</lable>
                        <input name="password" onChange={handleInputs} value={inputs.password} type="password" className="form-control my-3" placeholder="Enter password here..." />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="text-center">
                    <h2>User Name: {inputs.username}</h2>
                    <h2>Password: {inputs.password}</h2>
                </div>
            </div>


        </>
    );
}
export default ControllObject;