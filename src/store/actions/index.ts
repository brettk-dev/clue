import { Suspect, SuspectActionType } from '../reducers/suspect'

export const setSuspects = (categoryName: string, suspectNames: string[]) => ({
  type: SuspectActionType.SET,
  categoryName,
  suspectList: suspectNames.map(name => ({ name, isCleared: false }))
})

export const toggleSuspect = (categoryName: string, suspectName: string) => ({
  type: SuspectActionType.TOGGLE,
  categoryName,
  suspectName
})

export const resetSuspects = (categoryName: string) => ({
  type: SuspectActionType.RESET,
  categoryName
})
