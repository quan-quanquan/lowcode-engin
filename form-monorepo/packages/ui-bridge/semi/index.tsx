
import React, { useRef, useEffect, useState } from 'react'
import { Form, useFormApi, withField, Input } from '@douyinfe/semi-ui';
import { fieldComponents } from './fields'
import { Schema, FormModel } from 'core';
import { Observer } from 'mobx-react-lite'
export * from './fields'

interface IProps {
  model: FormModel<fieldComponents>
}
export function SemiForm(props: IProps) {
  const { model } = props
  const schema = model.getSchema()
  console.log(schema[0])

  const formApi = useRef()
  const setFormApi = (v: any) => {
    console.log(v)
    formApi.current = v
    formApi.current.setValues(model.data, {isReactive: true})
  }

  return <Observer>
    {
      () => (
        <Form getFormApi={setFormApi}>
          {
            schema.map(item => {
              const Component = fieldComponents[item.component]
              return <Component 
                key={item.field} 
                field={item.field}
                {...item.props}
              />
            })
          }
        </Form>
      )
    }
  </Observer>
}