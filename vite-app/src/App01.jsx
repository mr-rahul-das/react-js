import React from 'react'
import Navbar from './components/Navbar'
import UserForm from './components/UserForm'
import { useState } from 'react'
import UserTable from './components/UserTable'
import Footer from './components/Footer'

function App01() {


    let [userInputs, setUserInputs] = useState({ username: "", email: "", contact: "", age: "", address: "" });
    let [userList, setUserList] = useState([]);
    let [editId, setEditId] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        if (editId) {
            setUserList(prev => prev.map(user => user.id === editId ? { ...user, ...userInputs } : user))
            setEditId(null);

        }
        else {  
        let newUser = {
            id: Date.now(), username: userInputs.username,
            email: userInputs.email, contact: userInputs.contact,
            age: userInputs.age, address: userInputs.address
        };
        setUserList(prev => [...prev, newUser]);

        }


        setUserInputs({ username: "", email: "", contact: "", age: "", address: "" });

    }

    function handleDelete(id) {
        setUserList(prev => prev.filter(user => user.id !== id));

    }

    function handleEdit(id) {
        let selectedUser = userList.find(user => user.id === id);

         setUserInputs({
            username: selectedUser.username,
            email: selectedUser.email,
            contact: selectedUser.contact,
            age: selectedUser.age,
            address: selectedUser.address
        });
        setEditId(id);


    }




    return (
        <>
            <Navbar />

            <section className="container-fluid mt-5">

                <div className="row">
                    <UserForm userInputs={userInputs} setUserInputs={setUserInputs} handleSubmit={handleSubmit} editId={editId} />

                </div>

            </section>

            <section className="container mt-5">

                {
                    userList.length > 0 && <UserTable userList={userList} handleEdit={handleEdit} handleDelete={handleDelete} />
                }

            </section>

            <Footer/>





        </>
    )
}

export default App01