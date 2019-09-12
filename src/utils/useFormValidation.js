import {useState} from 'react';


const useFormValidation = (callback, initialValuesState, validate) => {
  const [values, setValues] = useState(initialValuesState);
  const [errors, setErrors] = useState(initialValuesState);

  function handleChange(e){
    const {name, value} = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validate(values));
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  }
}

export default useFormValidation;

