import { render, screen } from '@testing-library/react'

import { Board } from './Board'

describe('Board', () => {
  it('renders as a div', () => {
    render(<Board />)
    const boardElement = screen.getByTestId('board')

    expect(boardElement).toBeInTheDocument()
    expect(boardElement.classList).toHaveLength(1)
  })

  it('renders a title in an h2 with the class clue-board__title', () => {
    render(<Board name="Mansion" />)
    const titleElement = screen.getByText('Mansion')

    expect(titleElement.tagName).toBe('H2')
    expect(titleElement.classList).toHaveLength(1)
  })

  it('renders the Mansion category for each "People", "Weapons" and "Places"', () => {
    render(<Board name="Mansion" />)
    const categoryElements = screen.queryAllByTestId('category')

    expect(categoryElements).toHaveLength(3)
  })

  it('renders the Boardwalk category for each "People", "Weapons" and "Places"', () => {
    render(<Board name="Boardwalk" />)
    const categoryElements = screen.queryAllByTestId('category')

    expect(categoryElements).toHaveLength(3)
  })
})
