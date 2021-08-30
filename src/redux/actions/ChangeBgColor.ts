import { SET_BG_COLOR } from '../../types'

export const setBgTheme = (primaryColor: string, secondaryColor: string) => {
  return {
    type: SET_BG_COLOR,
    payload: {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor,
    },
  }
}
