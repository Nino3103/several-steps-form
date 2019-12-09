import React from 'react'

function Step3(props){

    if (props.currentStep !== 3) { 
        return null 
    }

    return(
        <div className = 'form-group'>
            <label htmlFor = "password"> Password </label>
            <input
            className = 'form-control'
            id = 'password'
            name='password'
            type='text'
            placeholder='Enter your password'
            value = {props.email} // props from parent
            onChange = {props.handleChange} // props from parent
            />
        </div>
    )
}



export default Step3