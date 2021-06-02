import { SuspectActionType } from '../reducers/suspect'
import * as actions from './index'

describe('suspect actions', () => {
  it('creates a SET action', () => {
    expect(actions.setSuspects('People', ['Green', 'Mustard', 'Peacock'])).toEqual({
      type: SuspectActionType.SET,
      categoryName: 'People',
      suspectList: [
        { name: 'Green', isCleared: false },
        { name: 'Mustard', isCleared: false },
        { name: 'Peacock', isCleared: false }
      ]
    })
  })

  it('creates a TOGGLE action', () => {
    expect(actions.toggleSuspect('People', 'Green')).toEqual({
      type: SuspectActionType.TOGGLE,
      categoryName: 'People',
      suspectName: 'Green'
    })
  })

  it('creates a RESET action', () => {
    expect(actions.resetSuspects()).toEqual({
      type: SuspectActionType.RESET
    })
  })
})
