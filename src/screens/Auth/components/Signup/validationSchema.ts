import * as Yup from 'yup';

const signupValidationSchema =  Yup.object({
    firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(6, 'Minmun 6 characters').max(15, 'Must be 15 characters or less').required('Required'),
  birthday:  Yup.string()
  .required('Required'),
gender:  Yup.string()
.required('Required'),  
});

export default signupValidationSchema;