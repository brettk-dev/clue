import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from '../store/reducers'

import { Category } from './Category'

const store = createStore(rootReducer, { suspects: {} })

describe('Category', () => {
  it('renders an unordered list', () => {
    render(<Provider store={store}><Category /></Provider>)
    const categoryElement = screen.getByTestId('category')

    expect(categoryElement).toBeInTheDocument()
    expect(categoryElement.tagName).toBe('UL')
  })

  it('has a header with an indicator and a title', () => {
    render(<Provider store={store}><Category name="People" /></Provider>)
    const indicatorElement = screen.queryByText('-')
    const titleElement = screen.queryByText('People')

    expect(indicatorElement).toBeInTheDocument()
    expect(titleElement).toBeInTheDocument()
  })

  it('renders a given list of suspects', () => {
    const suspects = ['Green', 'Mustard', 'Peacock']
    render(<Provider store={store}><Category suspects={suspects} /></Provider>)
    const suspectElements = screen.getAllByTestId('suspect')

    expect(suspectElements).toHaveLength(3)
  })

  it('hides the suspects when the header is clicked', () => {
    const suspects = ['Green', 'Mustard', 'Peacock']
    render(<Provider store={store}><Category name="People" suspects={suspects} /></Provider>)
    const headerElement = screen.getByTestId('category-header')
    headerElement.click()
    const indicatorElement = screen.queryByText('+')
    const suspectElements = screen.queryAllByTestId('suspect')

    expect(indicatorElement).toBeInTheDocument()
    expect(suspectElements).toHaveLength(0)
  })

  it('shows the suspects when the header is clicked twice', () => {
    const suspects = ['Green', 'Mustard', 'Peacock']
    render(<Provider store={store}><Category name="People" suspects={suspects} /></Provider>)
    const headerElement = screen.getByTestId('category-header')
    headerElement.click()
    headerElement.click()
    const indicatorElement = screen.queryByText('-')
    const suspectElements = screen.queryAllByTestId('suspect')

    expect(indicatorElement).toBeInTheDocument()
    expect(suspectElements).toHaveLength(3)
  })

  it('renders a list item with the name in it', () => {
    render(<Provider store={store}><Category name="People" /></Provider>)
    const headerElement = screen.getByTestId('category-header')

    expect(headerElement).toBeInTheDocument()
    expect(headerElement.tagName).toBe('LI')
  })

  it('reorders the suspects based upon their cleared status', () => {
    const suspects = ['Green', 'Mustard', 'Peacock']
    render(<Provider store={store}><Category name="People" suspects={suspects} /></Provider>)
    const greenElement = screen.getByText('Green')
    greenElement.click()
    const suspectElements = screen.getAllByTestId('suspect')
    const suspectList = suspectElements.map(el => el.textContent)

    expect(suspectList).not.toEqual(['Green', 'Mustard', 'Peacock'])
    expect(suspectList).toEqual(['Mustard', 'Peacock', 'Green'])
  })

  it('reorders the suspects based upon their cleared status when clicked in an awkward order', () => {
    const suspects = ['Green', 'Mustard', 'Peacock']
    render(<Provider store={store}><Category name="People" suspects={suspects} /></Provider>)
    const greenElement = screen.getByText('Green')
    const mustardElement = screen.getByText('Mustard')
    greenElement.click()
    mustardElement.click()
    // React creates new Elements, so we have to get the new references
    const greenElement2 = screen.getByText('Green')
    const mustardElement2 = screen.getByText('Mustard')
    greenElement2.click()
    mustardElement2.click()
    const suspectElements = screen.getAllByTestId('suspect')
    const suspectList = suspectElements.map(el => el.textContent)

    expect(suspectList).toEqual(['Green', 'Mustard', 'Peacock'])
  })
})
