import InputHOC from './InputHOC'
import styles from './style.module.scss'

const Kelvin = (props: any) => {
  console.log('🚀 ~ file: Kelvin.tsx:5 ~ Kelvin ~ props', props)

  const handleChangeValue = () => {
    props.onChangeValue('10')
  }
  return (
    <div onClick={handleChangeValue} className={styles.temp}>
      {props.value + 273.15}K
    </div>
  )
}

export default InputHOC(Kelvin)
