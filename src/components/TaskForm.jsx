import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const TaskForm = ({ agregarTarea }) => {

    const [tarea, setTarea] = useState('');

    const handleInputChange = (e) => {
        setTarea(e.target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (tarea !== '') {
            agregarTarea(tarea);
            setTarea('');
        }
    }

    return (
        <div>
            <div className='tituloForm'>
                <h2>Your List</h2>
            </div>
            <form className='form' onSubmit={handleOnSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Ingrese la tarea"
                    variant="outlined"
                    type='text'
                    value={tarea}
                    onChange={handleInputChange}
                    className='inputAgregar'
                />
                <button className='botonAgregar' type='submit' onClick={handleOnSubmit}>Agregar Tarea</button>
            </form>
        </div>
    )
}

export default TaskForm