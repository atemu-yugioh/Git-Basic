import { ActionType } from '../../constants/actionType'

export const initialArg: number = 0

const reducer = (state: number, action: ActionType) => {
  switch (action.type) {
    case 'INCREASE': {
      return state + 1
    }
    case 'DECREASE': {
      return state - 1
    }
    case 'INCREASE_X': {
      return state + (action.payload as number)
    }
    default:
      return state
  }
}

export default reducer
