import uuid from 'react-uuid';
import './App.css';
import List from './components/List/List';
import User from './components/User/User';

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

  return (
    <div className="container">
      <User />
      <List startingValues={initialValues}/>
    </div>
  );
}

export default App;
