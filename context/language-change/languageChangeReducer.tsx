import { LanguageState } from '.'
type LanguageActionType =
  | { type: 'Language - SetLanguage'; payload: string }
  | { type: 'Language - ChangeLanguage'; payload: string }

export const languageReducer = (
  state: LanguageState,
  action: LanguageActionType
): LanguageState => {
  switch (action.type) {
    case 'Language - SetLanguage':
      return {
        ...state,
        language: action.payload,
      }

    case 'Language - ChangeLanguage':
      return {
        ...state,
        language: action.payload,
      }

    default:
      return state
  }
}
