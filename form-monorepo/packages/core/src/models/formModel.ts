
import { fieldModel, fieldConfig } from "./fieldModel"
import { observable, reaction } from "reactive"

export type Schema<T> = {
  component: T,
  [p: string]: any
}[]

export class FormModel<T> {
  fields:any[] = []
  data:any = observable({})
  creatfield(name:string, config: fieldConfig<T>) {
    this.data[name] = config.defaultValue
    const field = new fieldModel<T>(name, this.data[name], config)
    this.fields.push(field)
  }
  getSchema(): Schema<T> {
    return this.fields.map(field => ({
      value: field.value,
      field: field.name,
      component: field.config.component,
      props: field.config.componentProps
    })) 
  }
  setEffect(field:string, effect:any) {
    reaction(() => this.data[field], effect)
  }
  test() {
    this.data.name = '罗娜'
  }
}