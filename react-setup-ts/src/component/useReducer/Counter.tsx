import { useReducer } from 'react'
import { decreaseNumber, increaseNumber, increaseXNumber } from '../../store/action/action'
import reducer, { initialArg } from '../../store/reducer/reducer'

const Counter = () => {
  const [counter, dispatch] = useReducer(reducer, initialArg)

  const handleIncrease = () => {
    dispatch(increaseNumber())
  }

  const handleDecrease = () => {
    dispatch(decreaseNumber())
  }

  const handleIncreaseX = (number: number) => () => {
    dispatch(increaseXNumber(number))
  }
  return (
    <div>
      <button onClick={() => handleDecrease()}>Decrease number</button>
      <p>Number is: {counter}</p>
      <button onClick={() => handleIncrease()}>Increase number</button>
      <button onClick={handleIncreaseX(3)}>Increase X number</button>
    </div>
  )
}

export default Counter
