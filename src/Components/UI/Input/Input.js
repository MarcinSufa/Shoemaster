import React from 'react';
import './Input.css';

const input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className='inputElement'
            onChange={props.changed} 
            {...props.elementConfig}
            value={props.value}  />;
            break;
        case ('textarea'):
            inputElement = <textarea  className='inputElement' 
            onChange={props.changed}
            {...props.elementConfig}
            value={props.value} />;
            break;
        case ('dropdown'):
            inputElement = <input className='inputElement'
            onChange={props.changed} 
            {...props.elementConfig}
            value={props.value} />;
            break;
        case ('email'):
            inputElement = <input className='inputElement' 
            onChange={props.changed}
            {...props.elementConfig}
            value={props.value} />;
            break;
        case ('select'):
            inputElement = (<select className='inputElement Select'
            onChange={props.changed} 
            {...props.elementConfig}
            value={props.value}>
            {props.elementConfig.options.map(option => (
                <option key={option.value}
                value={option.value}>
                {option.displayValue}
                </option>
            ))} 
            </select>); 
            break; 
        default:
            inputElement = <input className='inputElement' 
            onChange={props.changed}
            {...props.elementConfig}
            value={props.value}/>;
    }   


    return (

        <div className='Input'>
            <label className='Label'>{props.label}</label>
            {inputElement}
        </div>
    );
}




export default input;