import React from 'react'

function UserForm({userInputs,setUserInputs,handleSubmit,editId}) {

    function handleInputs(e){
        setUserInputs(prev=>({...prev,[e.target.name]: e.target.value }))
    }

    
    return (
        <>
            <div className="card w-50 m-auto">
                <div className="card-header bg-dark text-white text-center">
                    <h3>Registration Form</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        
                        <label className="form-label">Enter username here:</label>
                        <input className='form-control' name='username' value={userInputs.username} onChange={handleInputs} type="text" placeholder='Enter username here...' />
                        
                        <label className="form-label">Enter email here:</label>
                        <input className='form-control' name='email' value={userInputs.email} onChange={handleInputs} type="email" placeholder='Enter email here...' />
                        
                        <label className="form-label">Enter contact no. here:</label>
                        <input className='form-control' name='contact' value={userInputs.contact} onChange={handleInputs} type="number" placeholder='Enter contact no. here...' />
                        
                        <label className="form-label">Enter age here:</label>
                        <input className='form-control' name='age' value={userInputs.age} onChange={handleInputs} type="number" placeholder='Enter age here...' />
                        
                        <label className="form-label">Enter address here:</label>
                        <textarea className='form-control' name='address' value={userInputs.address} onChange={handleInputs} placeholder='Enter address here...'></textarea>



                        <button type='submit' className="btn btn-dark m-3">
                            {
                                editId ? "Save Chnages" : "Add User Details"
                            }
                        </button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default UserForm