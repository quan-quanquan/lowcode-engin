// import { Form } from '@douyinfe/semi-ui';
import React from 'react'
import './style.scss'
import { SemiForm } from 'ui-bridge'
import { FormModel } from 'core'

export default function FormContainer() {
  const model = new FormModel()
  console.log(1)
  return <div className="form-container">
    {/* <Form layout='horizontal'>
      <Form.Input field='UserName' label='用户名' style={{ width: 80 }}/>
    </Form> */}
    <SemiForm
      schema={model.getSchema()}
    />
  </div>
}