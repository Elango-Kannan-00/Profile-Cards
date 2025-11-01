import React, { useEffect, useState } from 'react';
import Cards from './Cards.jsx';
import './App.css';

function App() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/data/employees.json")
      .then(res => res.json())
      .then(setDetails)
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h1>Employee Profile Page</h1>
      <div>
        {details.map(emp => (
          <Cards key={emp.id} emp={emp} />
        ))}
      </div>
    </div>
  );
}

export default App;
