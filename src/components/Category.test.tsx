import {render, screen} from '@testing-library/react'

import {Category} from './Category'

describe('Category', () => {
  it('renders an unordered list', () => {
    render(<Category />)
    const categoryElement = screen.getByTestId('category')

    expect(categoryElement).toBeInTheDocument()
    expect(categoryElement.tagName).toBe('UL')
  })

  it('renders a given list of suspects', () => {
    const suspects = ['Green', 'Mustard', 'Peacock']
    render(<Category suspects={suspects} />)
    const suspectElements = screen.getAllByTestId('suspect')

    expect(suspectElements).toHaveLength(3)
  })
})
