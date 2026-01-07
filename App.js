import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(res => setStudents(res.data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mendida TVET College & Tele System</h1>
      <h2>Student List</h2>
      <ul>
        {students.map(s => <li key={s.student_id}>{s.full_name} - {s.department}</li>)}
      </ul>
    </div>
  );
}
export default App;