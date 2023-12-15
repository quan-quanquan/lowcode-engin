// import { Form } from '@douyinfe/semi-ui';
import React from 'react'
import './style.scss'
import { SemiForm, fieldComponents } from 'ui-bridge'
import { FormModel, observable } from 'core'

// const de = (value: any, context: any) => {
//   console.log(1)
// }
// class Test {
//   @de data = 'xx'
//   @observable me = {a:'xxx'}
//   console () {
//     console.log(this.data)
//     console.log(this.me)
//     const me = observable({a:'xxx'})
//     console.log(me)
//   }
// }
// const t = new Test()
// t.console()
export default function FormContainer() {
  const model = new FormModel<fieldComponents>()
  
  model.creatfield('name', {
    component: 'Input',
    componentProps: {
      label: '姓名'
    },
    defaultValue: '罗拉'
  })

  model.creatfield('gender', {
    component: 'Select',
    componentProps: {
      label: '性别',
      optionList: [{
        label: '男',
        value: 'man'
      }, {
        label: '女',
        value: 'woman'
      }]
    }
  })

  model.setEffect('name', (value:any) => {
    console.log(value)
    model.data.gender = 'woman'
  })

  model.test()

  return <div className="form-container">
    {/* <Form layout='horizontal'>
      <Form.Input field='UserName' label='用户名' style={{ width: 80 }}/>
    </Form> */}
    <SemiForm
      model={model}
    />
  </div>
}