import React from 'react';
import styles from './Input.module.css';

const input = (props) => {

    let inputElement = null;
    const inputStyles = [styles.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputStyles.push(styles.Invalid);
    }

    let validationError = null;
    let errorMessage = props.value;
    if (props.invalid && props.touched) {
        if (props.elementConfig.type == 'password') {
            errorMessage = null;
        }
    validationError = <p className={styles.ValidationError}>
    {props.elementConfig.placeholder} {errorMessage} is not valid, try again!</p>;
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={inputStyles.join(' ')}
            onChange={props.changed} 
            {...props.elementConfig}
            value={props.value}  />;
            break;
        case ('textarea'):
            inputElement = <textarea  className={inputStyles} 
            onChange={props.changed}
            {...props.elementConfig}
            value={props.value} />;
            break;
        case ('dropdown'):
            inputElement = <input className={inputStyles}
            onChange={props.changed} 
            {...props.elementConfig}
            value={props.value} />;
            break;
        case ('email'):
            inputElement = <input className={inputStyles} 
            onChange={props.changed}
            {...props.elementConfig}
            value={props.value} />;
            break;
        case ('select'):
            inputElement = (<select className={inputStyles}
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
            inputElement = <input className={inputStyles} 
            onChange={props.changed}
            {...props.elementConfig}
            value={props.value}/>;
    }   


    return (

        <div className='Input'>
            <label className='Label'>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
}




export default input;