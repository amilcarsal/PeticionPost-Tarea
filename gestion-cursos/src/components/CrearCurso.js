import React, { useState } from "react";
import axios from "axios";

function CrearCurso() {
  const [nombre, setNombre] = useState("");
  const [creditos, setCreditos] = useState(0);
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://test-deploy-12.onrender.com/cursos", {
        nombre,
        creditos: parseInt(creditos),
        descripcion,
      });
      alert("Curso creado exitosamente");
      console.log(response.data);
    } catch (error) {
      console.error("Error al crear el curso", error);
      alert("Error al crear el curso");
    }
  };

  return (
    <div>
      <h2>Crear Curso</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del curso:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div>
          <label>Créditos:</label>
          <input type="number" value={creditos} onChange={(e) => setCreditos(e.target.value)} required />
        </div>
        <div>
          <label>Descripción:</label>
          <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
        </div>
        <button type="submit">Crear Curso</button>
      </form>
    </div>
  );
}

export default CrearCurso;
