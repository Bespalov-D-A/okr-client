import {object, string} from 'yup';

export const authValidationSchema = object({
  authLogin: string()
    .required('Login')
    .max(60, 'Не больше 60 символов'),
  authPassword: string()
    .required('Введите пароль')
    .max(60, 'Не больше 60 символов')
});

