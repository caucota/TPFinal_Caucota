import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const TaskForm = ({ agregarTarea }) => {
  const [tarea, setTarea] = useState("");

  const handleInputChange = (e) => {
    setTarea(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
//    if (tarea !== "") {
      agregarTarea(tarea);
      setTarea("");
    //}
  };

  return (
    <div>
      <div className="tituloForm">
        <h2>Tareas</h2>
      </div>
      <form className="form" onSubmit={handleOnSubmit}>
        <TextField
          id="outlined-basic"
          label="Ingrese la tarea"
          variant="outlined"
          type="text"
          value={tarea}
          onChange={handleInputChange}
          className="inputAgregar"
          required={true}
        />
        <button className="botonAgregar" >
          Agregar Tarea
        </button>
      </form>
{/*       <TaskList
        tareas={tareas}
        eliminarTarea={confirmarEliminar}
        checkTarea={checkTarea}
      />
      <button className="botonEliminarTodo" onClick={confirmarEliminarTodo} disabled={tareas.length == 0} >Eliminar todas las tareas</button>
      <button className="botonCompletarTodo" onClick={confirmarCompletadasTodasTareas} disabled={tareas.length == 0 || totalTareasPendientes == 0}>Completar todas las tareas</button>
 */}      
    </div>
  );
};

export default TaskForm;
