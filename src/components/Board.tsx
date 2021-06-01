import {Category} from './Category'

type BoardType = 'Mansion' | 'Boardwalk'

interface BoardData {
  [key: BoardType]: [
    {
      name: string
      suspects: string[]
    }
  ]
}

const boards: BoardData = {
  Mansion: [
    {
      name: 'People',
      suspects: ['Green', 'Mustard', 'Peacock', 'Plum', 'Scarlett', 'White']
    },
    {
      name: 'Weapons',
      suspects: ['Candlestick', 'Dagger', 'Lead Pipe', 'Pistol', 'Rope', 'Wrench']
    },
    {
      name: 'Places',
      suspects: ['Bathroom', 'Bedroom', 'Courtyard', 'Dining Room', 'Game Room', 'Garage', 'Kitchen', 'Living Room', 'Office']
    }
  ],
  Boardwalk: [
    {
      name: 'People',
      suspects: ['Green', 'Mustard', 'Peacock', 'Plum', 'Scarlett', 'White']
    },
    {
      name: 'Weapons',
      suspects: ['Candlestick', 'Dagger', 'Lead Pipe', 'Pistol', 'Rope', 'Wrench']
    },
    {
      name: 'Places',
      suspects: ['Arcade', 'Beach', 'Beach House', 'Ferris Wheel', 'Jet Ski Rental', 'Surf Shop']
    }
  ]
}

interface Props {
  name?: BoardType
}

export const Board = (props: Props) => {
  const name = props.name ?? ''

  const categories = boards[name] ?? []

  const boardClass = 'clue-board'
  const titleClass = `${boardClass}__title`

  return (
    <div className={boardClass} data-testid="board">
      <h2 className={titleClass}>{name}</h2>

      {categories.map(category => (
        <Category
          key={category.name}
          name={category.name}
          suspects={category.suspects}
        />
      ))}
    </div>
  )
}
