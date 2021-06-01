import {render, screen} from '@testing-library/react'

import {Category} from './Category'

describe('Category', () => {
  it('renders an unordered list', () => {
    render(<Category />)
    const categoryElement = screen.getByTestId('category')

    expect(categoryElement).toBeInTheDocument()
    expect(categoryElement.tagName).toBe('UL')
  })

  it('renders a list item with the name in it', () => {
    render(<Category name="People" />)
    const headerElement = screen.getByText('People')

    expect(headerElement).toBeInTheDocument()
    expect(headerElement.tagName).toBe('LI')
  })

  it('renders a given list of suspects', () => {
    const suspects = ['Green', 'Mustard', 'Peacock']
    render(<Category suspects={suspects} />)
    const suspectElements = screen.getAllByTestId('suspect')

    expect(suspectElements).toHaveLength(3)
  })


  it('hides the suspects when the header is clicked', () => {})
})
