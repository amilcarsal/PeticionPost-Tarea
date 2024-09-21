import React, { useState, useEffect } from "react";
import axios from "axios";

function ConsultarCursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await axios.get("https://test-deploy-12.onrender.com/cursos");
        console.log("Respuesta del servidor:", response.data); // Verifica la estructura de los datos
        setCursos(response.data);
        console.log("Cursos después de la asignación:", response.data); // Verifica aquí
 // Asignar los datos al estado
      } catch (error) {
        console.error("Error al obtener los cursos", error);
      }
    };
    fetchCursos();
  }, []);

  return (
    <div>
      <h2>Lista de Cursos</h2>
      {cursos.length === 0 ? (
        <p>No hay cursos disponibles</p>
      ) : (
        <ul>
          {cursos.map((curso, index) => (
            <li key={curso.id || index}>
              <strong>{curso.nombre || "Sin nombre"}</strong> - {curso.creditos || 0} créditos
              <p>{curso.descripcion || "Sin descripción"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ConsultarCursos;


