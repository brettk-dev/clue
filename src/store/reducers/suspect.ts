export interface Suspect {
  name: string
  isCleared: boolean
}

export interface SuspectState {
  [key: string]: Suspect[]
}

export enum SuspectActionType {
  SET,
  TOGGLE,
  RESET
}

export interface SuspectAction {
  type: SuspectActionType
  categoryName: string
  suspectName?: string
  suspectList?: Suspect[]
}

export const suspects = (state: SuspectState = {}, action?: SuspectAction): SuspectState => {
  if (!action) {
    return {}
  }
  switch (action.type) {
    case SuspectActionType.SET:
      return {
        ...state,
        [action.categoryName]: action.suspectList ?? []
      }
    case SuspectActionType.TOGGLE:
      return {
        ...state,
        [action.categoryName]: (state[action.categoryName] ?? []).map(suspect => {
          return suspect.name === action.suspectName
            ? { ...suspect, isCleared: !suspect.isCleared }
            : suspect
        })
      }
    case SuspectActionType.RESET:
      return {
        ...state,
        [action.categoryName]: (state[action.categoryName] ?? []).map(suspect => ({ ...suspect, isCleared: false }))
      }
  }

  return {}
}
