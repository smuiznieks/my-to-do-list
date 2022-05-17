import { Navigate, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import uuid from 'react-uuid';
import './App.css';
import { AuthProvider } from './components/Auth/AuthProvider';
import List from './components/List/List';
import NavBar from "./components/NavBar/NavBar";
import User from './components/User/User';
import SignUp from "./components/Views/SignUp";
import RequireAuth from "./components/Auth/RequireAuth";
import Login from "./components/Auth/Login";

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
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        let url = 'http://localhost:3001/tasks';
        let response = await axios(url);
        setTasks(response.data);
      } catch {
        console.log('Error!!');
      }
    }
    fetchTasks();
  }, [])

  return (
    <AuthProvider>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={
            <RequireAuth>
              <User />
              <List startingValues={tasks}/>
            </RequireAuth>
          } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-to-do-list" element={
            <Navigate to="/"/>
          } />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
