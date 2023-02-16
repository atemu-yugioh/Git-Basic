import { INCREASE, DECREASE, INCREASE_X } from './../../constants/actionType'

export const increaseNumber = () => {
  return { type: INCREASE }
}

export const decreaseNumber = () => {
  return { type: DECREASE }
}

export const increaseXNumber = (payload: number) => {
  return { type: INCREASE_X, payload: payload }
}
