import React, { useState } from 'react'

function Parent({parentInput,setParentInput,childData,handleChildData}) {

   

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3>Parent Component</h3>

                </div>
                <div className="card-body">
                    <form onSubmit={handleChildData}>
                        <input type="text" value={parentInput} onChange={(e)=>setParentInput(e.target.value)} className="form-control my-3" placeholder='Enter something to send data to child..' />
                        <button type='submit' className="btn btn-dark">Send</button>
                    </form>
                </div>

                <div className="card-footer">
                    <ol>
                        {
                            <li>
                                {
                                    childData
                                }
                            </li>
                        }
                    </ol>
                </div>

            </div>
        </>

    )
}

export default Parent