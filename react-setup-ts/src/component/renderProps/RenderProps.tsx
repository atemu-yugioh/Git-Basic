import Fahrenheit from './Fahrenheit'
import Input from './Input'
import Kelvin from './Kelvin'
import Title from './Title'
import styles from './style.module.scss'

const RenderProps = () => {
  return (
    <div className={styles.App}>
      <Title render={(text: string) => <h1>{`Hello I am  ${text}`}</h1>} />
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input />
      <Kelvin />
      <Fahrenheit />
    </div>
  )
}

export default RenderProps
