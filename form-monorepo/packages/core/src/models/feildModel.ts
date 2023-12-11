export type FeildConfig<T> = {
  component: T,
  [p: string]: any
}
export class FeildModel<T> {
  name: string
  value: any
  config
  constructor(name:string, config: FeildConfig<T>) {
    this.name = name
    this.config = config
  }
}