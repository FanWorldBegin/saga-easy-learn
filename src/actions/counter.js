
import {INCREMENT, INCREMENT_ASYNC} from '../constants/counters'
export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const incrementAsync = () => {
  return {
    type: INCREMENT_ASYNC
  }

}