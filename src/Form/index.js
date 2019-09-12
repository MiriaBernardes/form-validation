import React, {useState} from 'react';

import {useFormValidation} from '../utils'
import validate from './validateLogin';

import './styles.css'


export default function Form() {
  const initialValues = {
    email: '',
    password: ''
  }

  const {handleChange, handleSubmit, values} = useFormValidation(submit, initialValues, validate);
  
  function submit(e) {
    e.preventDefault();
    console.log(e.target.email.value);
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
      <label htmlFor="password">Password</label>
      <input 
        id="password"
        name="password" 
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      <br/>
      <button type="submit">enviar</button>
    </form>
  );
}
