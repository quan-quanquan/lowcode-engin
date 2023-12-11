
import React from 'react'
import { Form } from '@douyinfe/semi-ui';
import { FeildComponents } from './feilds'
import { Schema } from 'core';
export * from './feilds'

interface IProps {
  schema: Schema<FeildComponents>
}
export function SemiForm(props: IProps) {
  const fields = props.schema.map(item => {
    const Component = FeildComponents[item.component]
    return <Component key={item.name} field={item.name} {...item.props}/>
  })
  return <Form>
    {fields}
  </Form>
}