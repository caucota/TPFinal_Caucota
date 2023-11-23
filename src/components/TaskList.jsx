import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tareas, eliminarTarea, checkTarea }) => {
    return (
        <div>
            <h2 className='tituloLista'>Lista de Tareas</h2>
            {
                tareas.length === 0 ?
                    <h4>Sin Tareas Pendientes</h4>
                    :
                    <ul className='listaContainer'>
                        {
                            tareas.map((tarea, index) => (
                                <TaskItem
                                    key={index}
                                    tarea={tarea}
                                    eliminarTarea={eliminarTarea}
                                    checkTarea={checkTarea}
                                />
                            ))
                        }
                    </ul>
            }
        </div>
    )
}

export default TaskList