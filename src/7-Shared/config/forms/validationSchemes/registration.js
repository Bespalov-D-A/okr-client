import {object, string} from 'yup';
import {maxFunc, ONLY_CHARTS_AND_NUMBERS, ONLY_NUMBERS, REQUIRED} from '../../../assests/Constants';

export const regValidationSchema = object({
   email: string()
    .required(REQUIRED)
    .max(60, maxFunc(60))
    .email('Некорректная почта'),
   phone: string()
    .required(REQUIRED)
    .max(20, maxFunc(20))
    .matches(/^[0-9]+/gm, ONLY_NUMBERS),
   password: string()
    .required(REQUIRED)
    .max(60, maxFunc(60)),
   confirm_password: string()
    .required(REQUIRED)
    .max(60, maxFunc(60)),
});

