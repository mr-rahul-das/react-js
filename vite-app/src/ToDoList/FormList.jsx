import React from 'react';

function FormList({ taskList, handleDelete, handleToggle, handleEdit }) {

    return (
        <div className=" w-50  m-auto ">
            <ul className="list-group">
                {

                    taskList.map((ele) => (
                        <li className="list-group-item" key={ele.id}>
                            <input className='form-check-input me-2' type="checkbox" checked={ele.isChecked} onChange={() => handleToggle(ele.id)} />
                            <span className={`h5 ${ele.isChecked ? "text-decoration-line-through" : ""}`}> {ele.task}</span>
                            <button className="btn btn-danger float-end" onClick={() => handleDelete(ele.id)}><i className="bi bi-trash-fill"></i></button>
                            <button className="btn btn-primary  mx-3 float-end" onClick={() => handleEdit(ele.id)}><i className="bi bi-pen-fill"></i></button>
                        </li>
                    ))

                }


            </ul>
        </div>
    )
}

export default FormList;