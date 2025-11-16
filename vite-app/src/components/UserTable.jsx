import React from 'react'
import UserTableRow from './UserTableRow';

function UserTable({userList,handleDelete,handleEdit}) {


    return (
        <>
            <h2>All Registerd users:</h2>
            <table className='table table-striped shadow rounded text-center'>
                <thead className=" table-danger">
                    <tr>
                        <th>User Id</th>
                        <th>User Name</th>
                        <th>User Age</th>
                        <th>User Email</th>
                        <th>User Contact</th>
                        <th>User Address</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="">

                    {
                        userList.map(ele => <UserTableRow handleEdit={handleEdit} handleDelete={handleDelete} data={ele} key={ele.id}/>)

                    }

                </tbody>
            </table>
        </>
    )
}

export default UserTable