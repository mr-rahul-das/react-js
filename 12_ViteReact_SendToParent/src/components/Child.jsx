import React from 'react'
import { useState } from 'react';

function Child({ childInput,setChildInput,parentData, handleParentData }) {
    

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3>Child Component</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleParentData}>
                        <input type="text" value={childInput} onChange={(e)=>setChildInput(e.target.value)} className="form-control my-3" placeholder='Enter something to send data to parent..' />
                        <button type='submit' className="btn btn-dark">Send</button>
                    </form>
                </div>

                <div className="card-footer">
                    <ol>

                        {
                            <li>
                                {
                                    parentData
                                }
                            </li>
                        }
                    </ol>
                </div>

            </div>
        </>
    )
}

export default Child