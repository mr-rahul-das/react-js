import React from 'react'

function Form({ taskInput, setTaskInput, handleSubmit, editId }) {
    return (
        <div className="card w-50 m-auto">
            <div className="card-header bg-dark text-white text-center">
                <h3>To-Do List</h3>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input className='form-control' value={taskInput} onChange={(e) => setTaskInput(e.target.value)} type="text" placeholder='Enter task here...' />
                        <button type='submit' className="btn btn-dark">
                            {
                                editId ? "Edit Task" : "Add Task"
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;