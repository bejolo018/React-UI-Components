import React from 'react';
import './Button.css';

const numberButtons = props =>{
    return (<button className='num-btn'>
        {props.text}
    </button>
    )
}


export default numberButtons