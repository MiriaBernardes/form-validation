import React, {useState} from 'react';

import {useFormValidation} from '../utils'
import validate from './validateLogin';

import './styles.css'


export default function Form() {
  const initialValues = {
    email: '',
    password: ''
  }

  const {handleChange, handleSubmit, values, errors} = useFormValidation(
    submit, 
    initialValues, 
    validate
  );
  
  function submit(e) {
    console.log('the form was submitting');
  }

  return (
    <form 
      noValidate
      onSubmit={handleSubmit}
    >
      <label htmlFor="email">Email</label>
      <input 
        id="email" 
        name="email" 
        type="email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}
      <label htmlFor="password">Password</label>
      <input 
        id="password"
        name="password" 
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.password}</p>}
      <br/>
      <button type="submit">enviar</button>
    </form>
  );
}
