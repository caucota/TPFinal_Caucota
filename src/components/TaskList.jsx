import React from 'react';
import Card from './Card';



const TaskList = ({ tareas, eliminarTarea, checkTarea, checkAll }) => {
    return (
        <div>
            <h2 className='tituloLista'>Lista de Tareas</h2>
            {
                tareas.length === 0 ?
                    <h4>Sin Tareas Pendientes</h4>
                    :
                    <ul className='listaContainer'>
                        {
                                tareas.map((tarea) => (
                                <Card 
                                    id={'Card'+tarea.id}
                                    key={'Card'+tarea.id}
                                    tarea={tarea}
                                    eliminarTarea={eliminarTarea}
                                    checkTarea={checkTarea}
                                    checkAll={checkAll}
                                    />
                                    ))
                        }
                    </ul>
            }
        </div>
    )
}

export default TaskList