import React from 'react';
import './Button.css';

const OperatorButtons = props =>{
    return (<button className='op-btn'>
        {props.text}
    </button>
    )
}


export default OperatorButtons