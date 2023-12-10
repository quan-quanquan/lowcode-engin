
import {FeildModel} from "./feildModel"

export class FormModel {
  feilds:any[] = []
  creatFeild(name, config) {
    const feild = new FeildModel()
    this.feilds.push(feild)
  }
  getSchema() {
    return this.feilds.map(feild => ({
      value: feild.value,
      feild: feild.name,
      component: feild.component[0],
      props: feild.component[1]
    })) 
  }
}