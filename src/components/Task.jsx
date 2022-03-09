import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'complete':
      console.log('Complete checkbox changed')
      return {...state, isComplete: !state.isComplete};
    case 'edit':
      return {...state, description: 'this is a test'};
    default:
      return state;
  }
}

const Task = ({task, handleDelete}) => {
  const [updatedTask, dispatch] = useReducer(reducer, task);
  const [isEditMode, setIsEditMode] = useState(false);
  const [description, setDescription] = useState(updatedTask.description);

  const handleCheckCompleted = (e) => {
    console.log(e.target.checked)
    dispatch({type: 'complete'});
  }

  const handleEditClicked = () => {
    setIsEditMode(!isEditMode);

    if (isEditMode) {
      console.log('Saving...');
      dispatch({type: 'edit', updatedValue: description})
    }
  }

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setDescription(e.target.value);
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditMode ? (
        <input type="text" className="form-control" value={updatedTask.description} onChange={handleInputChange}/>
      ) : (
        <span>
          <input className="form-check-input me-1" type="checkbox" checked={updatedTask.isComplete} onChange={handleCheckCompleted}/>
          {updatedTask.description}
       </span>
      )}
     
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary" onClick={handleEditClicked}>{isEditMode ? 'Save' : 'Edit'}</button>
        <button type="button" className="btn btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
      </div>
    </li>
  )
}

export default Task;
