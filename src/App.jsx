import { Routes, Route } from "react-router-dom";
import uuid from 'react-uuid';
import './App.css';
import List from './components/List/List';
import NavBar from "./components/NavBar/NavBar";
import User from './components/User/User';
import SignUp from "./components/Views/SignUp";
import Welcome from "./components/Views/Welcome";

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
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={
            <div>
              <User />
              <List startingValues={initialValues}/>
            </div>
          } />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
