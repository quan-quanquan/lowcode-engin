
import { FeildModel, FeildConfig } from "./feildModel"

export type Schema<T> = {
  component: T,
  [p: string]: any
}[]
export const a = 1
export class FormModel<T> {
  feilds:any[] = []
  creatFeild(name:string, config: FeildConfig<T>) {
    const feild = new FeildModel<T>(name, config)
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
}