import React, { useState } from 'react';

function App() {
  // Definimos el estado inicial para la lista de estudiantes
  const [students, setStudents] = useState([]);

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario
    const { name, subject, grade } = event.target.elements; // Extraemos los elementos del formulario
    // Actualizamos el estado con el nuevo estudiante
    setStudents([
      ...students,
      {
        nombre: name.value, // Obtenemos el valor del campo nombre
        materia: subject.value, // Obtenemos el valor del campo materia
        calificacion: grade.value, // Obtenemos el valor del campo calificación
      },
    ]);
    event.target.reset(); // Reseteamos el formulario después de enviar
  };

  return (
    <>
      <div>
        {/* Contenedor principal con clases de Bootstrap y otras clases personalizadas */}
        <div className="container jumbotron jumbotron-fluid col-lg-12" id="jumbotron">
          <div className="row">
            {/* Formulario centrado con la función handleSubmit */}
            <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
              <div className="rejister">
                <h3 className="rejister-title">Registro de estudiantes</h3>
                {/* Grupo de entrada para el nombre */}
                <div className="input-group mb-3">
                  <span className="input-group-text span-design" id="inputGroup-sizing-default">Nombre</span>
                  <input type="text" className="form-control input-design" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="name" required /> <br />
                </div>

                {/* Grupo de entrada para la materia */}
                <div className="input-group mb-3">
                  <span className="input-group-text span-design" id="inputGroup-sizing-default">Materia</span>
                  <input type="text" className="form-control input-design" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="subject" required /> <br />
                </div>

                {/* Grupo de entrada para la calificación */}
                <div className="input-group mb-3">
                  <span className="input-group-text span-design" id="inputGroup-sizing-default">Calificación</span>
                  <input type="number" className="form-control input-design" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="grade" required />
                </div>
                {/* Botón para agregar estudiante */}
                <button type="submit" className="btn button-newStudent">Agregar estudiante</button>
              </div>
            </form>
          </div>
        </div>
        {/* Contenedor para la tabla de estudiantes */}
        <div className="container-table">
          <div className="container-table-design">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Materia</th>
                  <th scope="col">Calificación</th>
                </tr>
              </thead>
              <tbody>
                {/* Mapeamos la lista de estudiantes y mostramos cada uno en una fila */}
                {students.map((student, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{student.nombre}</td>
                    <td>{student.materia}</td>
                    <td>{student.calificacion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> 
        </div> 
      </div>
    </>
  );
}

export default App;
