import { render, screen } from '@testing-library/react'

import { Suspect } from './Suspect'

describe('Suspect', () => {
  it('renders learn react link', () => {
    render(<Suspect name="SuspectName" />)
    const liElement = screen.getByText('SuspectName')

    expect(liElement).toBeInTheDocument()
    expect(liElement.tagName).toBe('LI')
  })

  it('emits an onToggle event when it is clicked', () => {
    const handleToggle = jest.fn()
    render(<Suspect name="SuspectName" isCleared={false} onToggle={handleToggle} />)
    const liElement = screen.getByTestId('suspect')
    liElement.click()

    expect(handleToggle).toHaveBeenCalledTimes(1)
  })
})
