import {useState, useEffect} from 'react';


const useFormValidation = (callback, initialValuesState, validate) => {
  const [values, setValues] = useState(initialValuesState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(e) {
    const {name, value} = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors])

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  }
}

export default useFormValidation;

