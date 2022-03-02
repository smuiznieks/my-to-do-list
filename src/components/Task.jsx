const Task = ({task, handleDelete}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        <input className="form-check-input me-1" type="checkbox" value={task.isComplete} aria-label="..."/>
        {task.description}
      </span>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary">Edit</button>
        <button type="button" className="btn btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
      </div>
    </li>
  )
}

export default Task;
