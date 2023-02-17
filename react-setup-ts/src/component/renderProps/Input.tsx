import InputHOC from './InputHOC'

const Input = (props: any) => {
  const handleChangeValue = (e: any) => {
    props.onChangeValue(e.target.value)
  }

  return (
    <>
      <input type='text' value={props.value} onChange={handleChangeValue} placeholder='Temp in °C' />
    </>
  )
}

export default InputHOC(Input)
