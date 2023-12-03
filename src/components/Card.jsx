import React, {useEffect, useState} from "react";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import TaskItem from "./TaskItem";

const Card = ({ tarea, eliminarTarea, checkTarea, checkAll }) => {

    const[miTarea, setMiTarea] = useState({});
    const checkMiTarea = () => {
        const miTareaNueva = {...miTarea, completado: +!(miTarea.completado===1)}
        actualizarLocalStorage(miTareaNueva);
        setMiTarea(miTareaNueva);
        checkTarea(miTareaNueva.completado);
      }
    
      useEffect(() => {
        setMiTarea(tarea);
    }, [])

      useEffect( ()=>{
        if (JSON.stringify(miTarea)!=='{}'){
            const nuevaTarea = {...miTarea, completado: +true };
            actualizarLocalStorage(nuevaTarea)
            setMiTarea(nuevaTarea)
        }
    }, [checkAll])      

    const actualizarLocalStorage = (task)=>{
        let todasTareas = JSON.parse(localStorage.getItem('taskTrabajoFinal'));
        todasTareas = todasTareas.map(unaTarea =>(unaTarea.nombre==task.nombre? { ...unaTarea, completado: task.completado }:unaTarea) )
        localStorage.setItem('taskTrabajoFinal', JSON.stringify(todasTareas));
    }

  return (
    <div className="tareaContainer">
      <TaskItem tarea={miTarea} /> 

     <div className="iconsContainer">
        <IconButton
/*           onClick={() => eliminarTarea(miTarea.nombre)}
 */
          onClick={ ()=> eliminarTarea(miTarea.nombre)}
          aria-label="delete"
        >
          <DeleteForeverSharpIcon color="error" />
        </IconButton>
        <Checkbox
          checked={miTarea.completado===1}
          onChange={() => checkMiTarea()}
        />
      </div>
    </div>
  );
};

export default Card;
