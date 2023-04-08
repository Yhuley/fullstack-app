import * as yup from 'yup';

const emailValidation = yup
  .string()
  .matches(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    'Email is not valid',
  );

export const loginSchema = yup.object().shape({
  email: emailValidation.required('Required'),
  password: yup
    .string()
    .trim('password cannot include leading and trailing spaces')
    .strict(true)
    .min(8, 'Min. 8 char')
    .required('Required'),
});
