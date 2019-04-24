import React from 'react';
import './Button.css';

const ButtonContainer = props =>{
    return (
        <div className='btn-container'>
            {props.children}
            </div>
    )
}

export default ButtonContainer