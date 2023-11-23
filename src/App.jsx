import React, { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import './App.css'
import TaskForm from './components/TaskForm';

function App() {
  const [tareas, setTareas] = useState([]);
  const [completada, setCompletada] = useState(false);
  const [total, setTotal] = useState(0)

  useEffect(() => {

    const totalTareasPendientes = tareas.filter(tarea => !tarea.completado).length;
    setTotal(totalTareasPendientes);

  }, [tareas])


  const agregarTarea = (tareaNombre) => {

    const corrobarRepetidas = tareas.some((tarea) => tarea.nombre === tareaNombre);

    if (!corrobarRepetidas) {
      const nuevaTarea = {
        nombre: tareaNombre,
        completado: completada
      };
      setTareas([...tareas, nuevaTarea]);
    }
  };

  const eliminarTarea = (tareaNombre) => {
    const nuevaLista = tareas.filter(tarea => tarea.nombre !== tareaNombre);
    setTareas(nuevaLista);
  };

  const checkTarea = (tareaNombre) => {
    const listaChecks = tareas.map(tarea => tarea.nombre === tareaNombre ? { ...tarea, completado: !tarea.completado } : tarea);
    setTareas(listaChecks);
  }

  return (
    <div className='container'>
      <TaskForm agregarTarea={agregarTarea} />
      <TaskList
        tareas={tareas}
        eliminarTarea={eliminarTarea}
        checkTarea={checkTarea}
      />
      <h3 className={tareas.length === 0 ? 'canSinTareas' : 'canTareas'} >Tareas Pendientes: {total}</h3>
    </div>
  )
}

export default App
