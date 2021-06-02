import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from '../store/reducers'

import { Board } from './Board'

const store = createStore(rootReducer, { suspects: {} })

describe('Board', () => {
  it('renders as a div', () => {
    render(<Provider store={store}><Board /></Provider>)
    const boardElement = screen.getByTestId('board')

    expect(boardElement).toBeInTheDocument()
    expect(boardElement.classList).toHaveLength(1)
  })

  it('renders a title in an h2 with the class clue-board__title', () => {
    render(<Provider store={store}><Board name="Mansion" /></Provider>)
    const titleElement = screen.getByText('Mansion')

    expect(titleElement.tagName).toBe('H2')
    expect(titleElement.classList).toHaveLength(1)
  })

  it('renders the Mansion category for each "People", "Weapons" and "Places"', () => {
    render(<Provider store={store}><Board name="Mansion" /></Provider>)
    const categoryElements = screen.queryAllByTestId('category')

    expect(categoryElements).toHaveLength(3)
  })

  it('renders the Boardwalk category for each "People", "Weapons" and "Places"', () => {
    render(<Provider store={store}><Board name="Boardwalk" /></Provider>)
    const categoryElements = screen.queryAllByTestId('category')

    expect(categoryElements).toHaveLength(3)
  })
})
