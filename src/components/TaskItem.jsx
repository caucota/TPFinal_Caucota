import React from 'react';

const TaskItem = ({ tarea }) => {

    return (
        <li className={tarea.completado ? 'terminado' : 'incompleto'} key={tarea.id} estado={tarea.completado}>{tarea.nombre}</li>
    )
}

export default TaskItem