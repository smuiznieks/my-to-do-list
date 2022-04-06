import { Routes, Route } from "react-router-dom";
import uuid from 'react-uuid';
import './App.css';
import { AuthProvider } from './components/Auth/AuthProvider';
import List from './components/List/List';
import NavBar from "./components/NavBar/NavBar";
import User from './components/User/User';
import SignUp from "./components/Views/SignUp";
import Welcome from "./components/Views/Welcome";
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

  return (
    <AuthProvider>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={
            <RequireAuth>
              <User />
              <List startingValues={initialValues}/>
            </RequireAuth>
          } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
