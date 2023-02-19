import {object, string} from 'yup';
import {maxFunc, REQUIRED, UNCORRECT_DATA} from '../../../assests/Constants';

export const createTaskListValidationSchema = object({
  name: string()
    .required(REQUIRED)
    .max(60, maxFunc(60)),
  date: string()
    .required(REQUIRED)
    .max(60, maxFunc(60)),
  time: string()
    .required(REQUIRED)
    .max(60, maxFunc(60))
});

