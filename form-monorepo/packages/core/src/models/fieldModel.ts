export type fieldConfig<T> = {
  component: T,
  [p: string]: any
}
export class fieldModel<T> {
  name: string
  value: any
  config
  constructor(name:string, value:any, config: fieldConfig<T>) {
    this.name = name
    this.config = config
    this.value = value
  }
}