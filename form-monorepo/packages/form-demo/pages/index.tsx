// import { Form } from '@douyinfe/semi-ui';
import React from 'react'
import './style.scss'
import { SemiForm, FeildComponents } from 'ui-bridge'
import { FormModel } from 'core'

export default function FormContainer() {
  const model = new FormModel<FeildComponents>()
  
  model.creatFeild('name', {
    component: 'Input',
    componentProps: {
      label: '姓名111'
    }
  })

  return <div className="form-container">
    {/* <Form layout='horizontal'>
      <Form.Input field='UserName' label='用户名' style={{ width: 80 }}/>
    </Form> */}
    <SemiForm
      schema={model.getSchema()}
    />
  </div>
}