import { SET_BG_COLOR, BackgroundColor, SetBackgroundAction } from '../../types'

const setBgReducer = (
  state: BackgroundColor = { color: '', secondaryColor: '' },
  action: SetBackgroundAction
) => {
  switch (action.type) {
    case SET_BG_COLOR:
      return {
        ...state,
        color: action.payload.primaryColor,
        secondaryColor: action.payload.secondaryColor,
      }
    default:
      return state
  }
}

export default setBgReducer
