import React from 'react'
import { Checkbox } from 'antd'

const CheckboxComponent = ({ input, label, field, meta, group: FieldGroup }) => {
  return (
    <FieldGroup meta={meta} input={input} field={field} tailLayout={true}>
      <Checkbox checked={!!input.value} {...input} {...field.attrs} >{label}</Checkbox>
    </FieldGroup>
  )
}
CheckboxComponent.useGroup = false
export default CheckboxComponent
