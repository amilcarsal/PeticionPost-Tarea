import React, { useState } from "react";
import CrearCurso from "./components/CrearCurso";
import ConsultarCursos from "./components/ConsultarCursos";

function App() {
  const [menu, setMenu] = useState("crear"); // "crear" o "consultar"

  return (
    <div className="App">
      <nav>
        <button onClick={() => setMenu("crear")}>Crear Curso</button>
        <button onClick={() => setMenu("consultar")}>Consultar Cursos</button>
      </nav>

      {menu === "crear" ? <CrearCurso /> : <ConsultarCursos />}
    </div>
  );
}

export default App;
