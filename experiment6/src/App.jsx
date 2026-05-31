import  { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);

  // Fetch users from API on component mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.slice(0, 5)); // Fetches the first 5 users
      })
      .catch((error) => setMessage(error.message));
  }, []); // Added missing dependency array

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic (Fixed comparison syntax)
    if (!name || !email || !password) {
      setMessage('Please fill all fields');
      return;
    }

    setMessage('Registration Successful!');
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        
        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>

      {/* Dynamic message highlighting (Red for errors, Green for success) */}
      <h2 
        className="message" 
        style={{
          color: message.includes('Failed') || message.includes('Please fill all fields') ? 'red' : 'green'
        }}
      > 
        {message}
      </h2>

      {/* User list from API */}
      <div className="users-box">
        <h2>Fetched Users from API</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;