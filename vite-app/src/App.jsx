
import { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './ToDoList/Form';
import FormList from './ToDoList/FormList';

function App() {


  let [taskInput, setTaskInput] = useState("");
  let [taskList, setTaskList] = useState([{ id: 101, task: "Prove them wrong!", isChecked: false }]);
  let [editId,setEditId]=useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (taskInput.trim()) {

      if(editId){
        setTaskList(prev=>prev.map(ele=>ele.id===editId ? {...ele,task: taskInput } : ele))
        setEditId(null);
        setTaskInput("");

      }
      else{

      let newTask = { id: Date.now(), task: taskInput, isChecked: false };
      setTaskList(prev => [...prev, newTask]);
      setTaskInput("");

      }

    }
  }

  function handleDelete(id) {
    setTaskList(prev => prev.filter(ele => ele.id !== id));

  }

  function handleToggle(id) {
    setTaskList(prev => prev.map(ele => ele.id === id ? { ...ele, isChecked: !ele.isChecked } : ele));

  }

  function handleEdit(id) {
    let editTask = taskList.find(ele => ele.id === id);
    setTaskInput(editTask.task);
    setEditId(id);
  }


  return (
    <>
      <Navbar />


      <section className="container-fluid mt-5">
        <div className="row">
          <Form taskInput={taskInput} setTaskInput={setTaskInput} handleSubmit={handleSubmit} editId={editId} />
        </div>
      </section>

      <section className="container-fluid mt-5">
        <FormList taskList={taskList} handleDelete={handleDelete} handleToggle={handleToggle} handleEdit={handleEdit} />

      </section>


    </>
  )
}

export default App
