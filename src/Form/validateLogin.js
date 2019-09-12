export default function validate(values) {
  let errors = {};

  const PATTERN_EMAIL = RegExp(/\S+@\S+\.\S+/)

  if(!values.email) {
    errors.email = 'Email is required'
  }else if(!PATTERN_EMAIL.test(values.email)){
    errors.email = 'Email invalid'
  }

  if(!values.password) {
    errors.password = 'Password is required'
  }else if(values.password.length < 8) {
    errors.password = 'Password must be minimum 8 caracters'
  }

  return errors;
}