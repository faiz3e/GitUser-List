import React from 'react';
import classes from './ContainerStyle.css'
const head = (props) => (
    <div className="header">
        {props.children}
    </div>);

export default head;    
