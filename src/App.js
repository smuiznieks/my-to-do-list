import { useState } from 'react';
import './App.css';
import Task from './components/Task';

const initialValues = [
  {
    id: 1,
    description: "Learn React",
  },
  {
    id: 2,
    description: "Make dinner",
  },
  {
    id: 3,
    description: "Oil change",
  },
  {
    id: 4,
    description: "Laundry",
  },
];

function App() {
  const [tasks, setTasks] = useState(initialValues);

  const handleSave = (e) => {
    setTasks([...tasks, {description: 'work in progress!'}])
  }

  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className='tasks'>
        {tasks.map((task, index) => (
          <Task task={task} key={index} />
        ))}
      </div>
      <input type="text" className="form-control" placeholder="Don't forget!" aria-label="New Task" aria-describedby="basic-addon1"></input>
      <button className='btn btn-primary' aria-label='Submit'>+</button>
    </div>
  );
}

export default App;
