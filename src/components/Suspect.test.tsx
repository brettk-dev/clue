import {render, screen} from '@testing-library/react'

import {Suspect} from './Suspect'

describe('Suspect', () => {
  it('renders learn react link', () => {
    render(<Suspect name="SuspectName" />)
    const liElement = screen.getByText('SuspectName')

    expect(liElement).toBeInTheDocument()
    expect(liElement.tagName).toBe('LI')
  })

  it('emits an is cleared change request when starting with false and is clicked', () => {
    const setIsCleared = jest.fn()
    render(<Suspect name="SuspectName" isCleared={false} setIsCleared={setIsCleared} />)
    const liElement = screen.getByText('SuspectName')
    liElement.click()

    expect(setIsCleared).toHaveBeenCalledWith(true)
  })

  it('emits a not cleared change request when starting with true and clicked', () => {
    const setIsCleared = jest.fn()
    render(<Suspect name="SuspectName" isCleared={true} setIsCleared={setIsCleared} />)
    const liElement = screen.getByText('SuspectName')
    liElement.click()

    expect(setIsCleared).toHaveBeenCalledWith(false)
  })

  it('has the base class only when rendered with as cleared=false', () => {
    render(<Suspect name="SuspectName" isCleared={false} />)
    const liElement = screen.getByText('SuspectName')

    expect(liElement.classList).toHaveLength(1)
    expect(liElement.classList.contains('suspect-list__suspect')).toBe(true)
  })

  it('has the base and cleared classes when rendered with as cleared=true', () => {
    render(<Suspect name="SuspectName" isCleared={true} />)
    const liElement = screen.getByText('SuspectName')

    expect(liElement.classList).toHaveLength(2)
    expect(liElement.classList.contains('suspect-list__suspect')).toBe(true)
    expect(liElement.classList.contains('suspect-list__suspect--cleared')).toBe(true)
  })
})
