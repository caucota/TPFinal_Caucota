import React from 'react';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';


const TaskItem = ({ tarea, eliminarTarea, checkTarea }) => {
    return (
        <div className='tareaCointainer'>
            <li className={tarea.completado ? 'terminado' : 'incompleto'}>{tarea.nombre}</li>
            <div className='iconsContainer'>
                <IconButton onClick={() => eliminarTarea(tarea.nombre)} aria-label="delete">
                    <DeleteForeverSharpIcon color='error' />
                </IconButton>
                <Checkbox checked={tarea.completado} onChange={() => checkTarea(tarea.nombre)} />
            </div>
        </div>
    )
}

export default TaskItem