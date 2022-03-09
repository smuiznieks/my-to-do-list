import { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Task from './components/Task';
import User from './components/User';

const initialValues = [
  {
    id: uuid(),
    description: "Learn React",
    isComplete: false,
  },
  {
    id: uuid(),
    description: "Make dinner",
    isComplete: false,
  },
  {
    id: uuid(),
    description: "Oil change",
    isComplete: true,
  },
  {
    id: uuid(),
    description: "Laundry",
    isComplete: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(initialValues);
  const [newTask, setNewTask] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    setTasks([...tasks, {id: uuid(), description: newTask}]);
    setNewTask('');
  }

  const handleInput = (e) => {
    setNewTask(e.target.value);
  }

  const handleDelete = (deleteId) => {
    let filtered = tasks.filter(x => x.id !== deleteId);
    setTasks(filtered);
  }

  return (
    <div className="container">
      <User />
      <h1>To Do List</h1>
      <div className='tasks'>
        <ul className="list-group">
          {tasks.map((task) => (
            <Task task={task} key={task.id} handleDelete={handleDelete}/>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSave}>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Don't forget!" aria-label="New Task" onChange={handleInput} value={newTask}/>
          <button className="btn btn-outline-primary" type="submit" id="save">+</button>
        </div>
      </form>
    </div>
  );
}

export default App;
