import InputHOC from './InputHOC'
import styles from './style.module.scss'

const Fahrenheit = (props: any) => {
  return <div className={styles.temp}>{(props.value * 9) / 5 + 32}°F</div>
}

export default InputHOC(Fahrenheit)
