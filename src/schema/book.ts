import * as Yup from 'yup'
import { App } from '../types/app'

export const schemaBookCreate: Yup.SchemaOf<App.Book.Create.Body> = Yup.object().shape({
  title: Yup.string().required(),
  year: Yup.number().required()
})
