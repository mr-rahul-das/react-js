import React from 'react'

function UserTableRow({data,handleDelete,handleEdit}) {
    let {username,id,email,age,contact,address} = data;


    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{username}</td>
                <td>{age}</td>
                <td>{email}</td>
                <td>{contact}</td>
                <td>{address}</td>
                <td>
                    <button className="btn btn-primary" onClick={() => handleEdit(id)}><i className="bi bi-pen-fill"></i></button>
                </td>
                <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(id)}><i className="bi bi-trash-fill"></i></button>
                </td>
            </tr>

        </>
    )
}

export default UserTableRow;