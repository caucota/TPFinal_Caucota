import React, { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import './App.css'
import TaskForm from './components/TaskForm';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

function App() {

  const taresLS = JSON.parse(localStorage.getItem('taskTrabajoFinal'));
  const [tareas, setTareas] = useState(taresLS||[]);
  const [total, setTotal] = useState(0);
  const [tildarTodas, setTildarTodas] = useState(+false);

  useEffect(()=>{
    if (tareas !== '[]'){
      let tareasPend = 0;
      tareas.forEach( (tarea)=>{ tarea.completado==0?(tareasPend=tareasPend+1):tareasPend=tareasPend});
      setTotal(tareasPend);
    }
  }, [])
  
  useEffect(()=>{
    localStorage.setItem('taskTrabajoFinal', JSON.stringify(tareas));
  }, [tareas]

  )


  const agregarTarea = (tareaNombre) => {

    const corrobarRepetidas = tareas.some((tarea) => tarea.nombre === tareaNombre);

    if (!corrobarRepetidas) {
      const nuevaTarea = {
        id: (new Date(Date.now()).getTime()),
        nombre: tareaNombre,
        completado: +false
      };
      setTareas([...tareas, nuevaTarea]);
      setTotal(total+1)
    }
  };

  const confirmarEliminar = (nombreTarea) =>{
      confirmAlert({
        title: '',
        message: '¿Esta seguro/ade eliminar la tarea ' + nombreTarea+'?',
        buttons: [
          {
            label: 'Si',
            onClick: () => eliminarTarea(nombreTarea)
          },
          {
            label: 'No',
            onClick: () => console.log('Se canceló la eliminación de la tarea')
          }
        ]
      });    
  }

  const confirmarEliminarTodo = () =>{
    confirmAlert({
      title: '',
      message: '¿Esta seguro/a de eliminar todas las tareas?',
      buttons: [
        {
          label: 'Si',
          onClick: () => {setTareas([]); setTotal(0) }
        },
        {
          label: 'No',
          onClick: () => console.log('Se canceló la eliminación de todas las tareas')
        }
      ]
    });    
  }



  const eliminarTarea = (nombreTarea) => {
    const nuevaLista = tareas.filter(tarea => tarea.nombre !== nombreTarea);
    setTareas(nuevaLista);
    setTotal(total-1);
  };


  const confirmarCompletadasTodasTareas = () =>{
    confirmAlert({
      title: '',
      message: '¿Esta seguro/a de marcar todas las tareas como completas?',
      buttons: [
        {
          label: 'Si',
          onClick: () => checkTodasTareas()
        },
        {
          label: 'No',
          onClick: () => console.log('Se canceló la eliminación de todas las tareas')
        }
      ]
    });    
  }

  const checkTodasTareas = () => {
    setTildarTodas(+true);
    setTotal(0);
  }

  const checkTarea = (completado) =>{
    if (completado===1){
      setTotal(total-1)
    }else{
      setTotal(total+1)
    }
  }


  return (
    <div className='container'>
      <TaskForm agregarTarea={agregarTarea}/>
      <TaskList
        tareas={tareas}
        eliminarTarea={confirmarEliminar}
        checkTarea={checkTarea}
        checkAll={tildarTodas}
      /> 
      <h3 className={tareas.length === 0 ? 'cantSinTareas' : 'cantTareas'} >Tareas Pendientes: {total}</h3>
      <button className="botonEliminarTodo" onClick={confirmarEliminarTodo} disabled={tareas.length == 0} >Eliminar todas las tareas</button>
      <button className="botonCompletarTodo" onClick={confirmarCompletadasTodasTareas} disabled={tareas.length == 0 || total == 0}>Completar todas las tareas</button>
     </div>
  )
}

export default App
