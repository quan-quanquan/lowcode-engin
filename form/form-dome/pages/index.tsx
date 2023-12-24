// import { Form } from '@douyinfe/semi-ui';
import React from 'react'
import './style.scss'
import { SemiForm } from 'ui-bridge'
import { FormModel } from '../../core'
// import { SemiForm } from './form'

export default function FormContainer() {
  const model = new FormModel()

  return <div className="form-container">
    {/* <Form layout='horizontal'>
      <Form.Input field='UserName' label='用户名' style={{ width: 80 }}/>
    </Form> */}
    <SemiForm
      schema={model.getSchema()}
    />
  </div>
}