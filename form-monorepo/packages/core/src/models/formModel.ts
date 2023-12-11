
import { FeildModel, FeildConfig } from "./feildModel"
import { observable, reaction } from "reactive"

export type Schema<T> = {
  component: T,
  [p: string]: any
}[]

export class FormModel<T> {
  feilds:any[] = []
  data:any = observable({})
  creatFeild(name:string, config: FeildConfig<T>) {
    this.data[name] = config.defaultValue
    const feild = new FeildModel<T>(name, this.data[name], config)
    this.feilds.push(feild)
  }
  getSchema(): Schema<T> {
    return this.feilds.map(feild => ({
      value: feild.value,
      feild: feild.name,
      component: feild.config.component,
      props: feild.config.componentProps
    })) 
  }
  setEffect(feild:string, effect:any) {
    reaction(() => this.data[feild], effect)
  }
  test() {
    this.data.name = '罗娜'
  }
}