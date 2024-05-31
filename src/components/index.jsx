import React, { useState } from 'react';

function App() {
  const [students, setStudents] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, subject, grade } = event.target.elements;
    setStudents([
      ...students,
      {
        nombre: name.value,
        materia: subject.value,
        calificacion: grade.value,
      },
    ]);
    event.target.reset();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <label>
          Nombre:<br></br>
          <input type="text" name="name" required /> <br></br>
        </label>
        <label>
          Materia:<br></br>
          <input type="text" name="subject" required /> <br></br>
        </label>
        <label>
          Calificación:<br></br>
          <input type="number" name="grade" required /> <br></br> <br></br>
        </label>
        <button type="submit">Agregar estudiante</button>
      </form>
      <ul style={{ textAlign: 'center' }}>
        {students.map((student, index) => (
          <li key={index}>
            {student.nombre} - {student.materia} - {student.calificacion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
