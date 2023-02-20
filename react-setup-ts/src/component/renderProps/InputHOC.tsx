import React, { useState } from 'react'

const InputHOC = (Component: React.ComponentType) => {
  const NewComponent = (props: any) => {
    const [value, setValue] = useState<string>('')

    const onChangeValue = (values: string) => {
      setValue(values)
    }
    return (
      <>
        {/* <input type='text' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Temp in °C' /> */}
        <Component {...props} value={value} onChangeValue={onChangeValue} />
      </>
    )
  }
  return NewComponent
}

export default InputHOC
