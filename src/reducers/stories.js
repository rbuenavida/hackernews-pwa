import { STORY_TYPES } from '../const'
import filter from 'lodash.filter'

const initState = Object.keys(STORY_TYPES).reduce((obj, key) => {
  const stateDataKeyName = STORY_TYPES[key].stateDataKeyName
  obj[stateDataKeyName] = []
  return obj
}, {})

export default (state = initState, action) => {
  let newState = { ...state }
  const type = filter(STORY_TYPES, type => type.actionName === action.type)
  
  if (type.length > 0) {
    newState[type[0].stateDataKeyName] = action.data
  }

  return newState
}
