import { useState } from 'react';
import uuid from 'react-uuid';
import Task from '../Task/Task';

const List = ({startingValues}) => {
  const [tasks, setTasks] = useState(startingValues);
  const [newTask, setNewTask] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    setTasks([...tasks, {id: uuid(), description: newTask}]);
    setNewTask('');
  }

  const handleInput = (e) => {
    setNewTask(e.target.value);
  }

  const handleDeleteTaskById = (deleteId) => {
    let filtered = tasks.filter(x => x.id !== deleteId);
    setTasks(filtered);
  }

  return (
    <div>
      <h1>To Do List</h1>
      <div className='tasks'>
        <ul className="list-group">
          {tasks.map((item) => (
            <Task task={item} key={item.id} handleDelete={handleDeleteTaskById}/>
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

export default List;
