import { StateInf, ActionInf } from '../types'
import { Action } from '../enums'

function reducer(state: StateInf, action: ActionInf) {
  if (action.type === Action.TOGGLE_SIDEBAR) {
    return { ...state, isSideBarShown: !state.isSideBarShown }
  }
  if (action.type === Action.CHANGE_LANG) {
    return { ...state, lang: action.payload }
  }
  throw new Error(`No matching action with the name ${action.type} was found`)
}

export { reducer }
