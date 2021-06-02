import { SuspectActionType, suspects } from './suspect'

describe('suspect reducer', () => {
  it('handles the initial state', () => {
    expect(suspects()).toEqual({})
  })

  it('adds a category of suspects', () => {
    const suspectList = [
      { name: 'Green', isCleared: false },
      { name: 'Mustard', isCleared: false },
      { name: 'Peacock', isCleared: false }
    ]

    expect(suspects({}, {
      type: SuspectActionType.SET,
      categoryName: 'People',
      suspectList
    })).toEqual({ People: suspectList })
  })

  it('toggles the cleared status of a suspect', () => {
    const state = {
      People: [
        { name: 'Green', isCleared: false },
        { name: 'Mustard', isCleared: false },
        { name: 'Peacock', isCleared: false }
      ]
    }

    expect(suspects(state, {
      type: SuspectActionType.TOGGLE,
      categoryName: 'People',
      suspectName: 'Green'
    })).toEqual({
      People: [
        { name: 'Green', isCleared: true },
        { name: 'Mustard', isCleared: false },
        { name: 'Peacock', isCleared: false }
      ]
    })
  })

  it('resets all suspects to not cleared', () => {
    const state = {
      People: [
        { name: 'Green', isCleared: true },
        { name: 'Mustard', isCleared: false },
        { name: 'Peacock', isCleared: true }
      ]
    }

    expect(suspects(state, {
      type: SuspectActionType.RESET,
      categoryName: 'People'
    })).toEqual({
      People: [
        { name: 'Green', isCleared: false },
        { name: 'Mustard', isCleared: false },
        { name: 'Peacock', isCleared: false }
      ]
    })
  })
})
