import React, { useEffect, useState } from 'react';
import Cards from './components/cards.jsx';
import './App.css';
import ProfileView from './components/ProfileView.jsx';

function App() {
  const [details, setDetails] = useState([]);
  const [selectedEmp, setSelectedEmp] = useState(null);

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
          <Cards 
            key={emp.id} 
            emp={emp} 
            viewProfile={() => setSelectedEmp(emp)}
        />
        ))}
      </div>

      <ProfileView 
        emp={selectedEmp}
        onClose={() => setSelectedEmp(null)}
      />
    </div>
  );
}

export default App;
