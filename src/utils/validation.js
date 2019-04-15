import * as Yup from 'yup';

export const GenerateNumberSchema = Yup.object().shape({
  number: Yup.number().required('Input a number').integer('number must be an integer'),
});
