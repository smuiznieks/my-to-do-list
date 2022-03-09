import axios from 'axios';
import { useEffect, useState } from 'react';
import './User.css';

const User = () => {
  // const url = 'https://randomuser.me/api/?results=1';
  const url = 'https://restcountries.com/v2/regionalbloc/eu'
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching user data...');
    // async function getUserData() {
    //   const response = await fetch(url);
    //   const json = await response.json();
    //   console.log(response);
    //   console.log(json);
    // }

    // getUserData();

    const fetchUserData = async () => {
      try {
        let response = await axios(url);
        console.log(response.data);
        // setUser(response.data.results[0]);
        // setIsLoading(false);
      } catch {
        console.log('Error!!');
      }
    }

    fetchUserData();
  }, []);

  return (
    <div className="card" style={{width: '18rem'}}>
      {isLoading ? (
        <div className="card-body">
          <h5 className="card-title">Loading...</h5>
        </div>
      ) : (
        <div className="card-body">
          <h5 className="card-title">Welcome, {user.name.first} {user.name.last}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Username: {user.login.username}</h6>
        </div>
      )}
    </div>
  )
}

export default User;
