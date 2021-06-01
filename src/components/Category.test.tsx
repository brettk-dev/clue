import {render, screen} from '@testing-library/react'

import {Category} from './Category'

describe('Category', () => {
  it('renders an unordered list', () => {
    render(<Category />)
    const categoryElement = screen.getByTestId('category')

    expect(categoryElement).toBeInTheDocument()
    expect(categoryElement.tagName).toBe('UL')
  })

  it('has a header with an indicator and a title', () => {
    render(<Category name="People" />)
    const indicatorElement = screen.queryByText('-')
    const titleElement = screen.queryByText('People')

    expect(indicatorElement).toBeInTheDocument()
    expect(titleElement).toBeInTheDocument()
  })

  it('renders a given list of suspects', () => {
    const suspects = ['Green', 'Mustard', 'Peacock']
    render(<Category suspects={suspects} />)
    const suspectElements = screen.getAllByTestId('suspect')

    expect(suspectElements).toHaveLength(3)
  })

  it('hides the suspects when the header is clicked', () => {
    const suspects = ['Green', 'Mustard', 'Peacock']
    render(<Category name="People" suspects={suspects} />)
    const headerElement = screen.getByTestId('category-header')
    headerElement.click()
    const indicatorElement = screen.queryByText('+')
    const suspectElements = screen.queryAllByTestId('suspect')

    expect(indicatorElement).toBeInTheDocument()
    expect(suspectElements).toHaveLength(0)
  })

  it('shows the suspects when the header is clicked twice', () => {
    const suspects = ['Green', 'Mustard', 'Peacock']
    render(<Category name="People" suspects={suspects} />)
    const headerElement = screen.getByTestId('category-header')
    headerElement.click()
    headerElement.click()
    const indicatorElement = screen.queryByText('-')
    const suspectElements = screen.queryAllByTestId('suspect')

    expect(indicatorElement).toBeInTheDocument()
    expect(suspectElements).toHaveLength(3)
  })

  it('has the suspect-list class', () => {
    render(<Category />)
    const categoryElement = screen.getByTestId('category')

    expect(categoryElement.classList).toHaveLength(1)
    expect(categoryElement.classList.contains('suspect-list')).toBe(true)
  })

  it('renders a list item with the name in it', () => {
    render(<Category name="People" />)
    const headerElement = screen.getByTestId('category-header')

    expect(headerElement).toBeInTheDocument()
    expect(headerElement.tagName).toBe('LI')
    expect(headerElement.classList).toHaveLength(1)
    expect(headerElement.classList.contains('suspect-list__header'))
  })
})
