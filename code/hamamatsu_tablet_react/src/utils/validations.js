import * as yup from 'yup'
import { String } from '../constants'

export const schemaLogin = yup.object().shape({
  username: yup.string().required(String.user + String.E0001),
  password: yup.string().required(String.password + String.E0001)
})
export const schemaPopupSonshouShashin = yup.object().shape({
  txtShurui: yup
    .string()
    .required(String.E0001)
    .max(20, String.E0003)
})
