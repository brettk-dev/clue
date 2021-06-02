import { Category, CategoryData } from './Category'
import styles from './Board.module.scss'

export type BoardType = 'Mansion' | 'Boardwalk'

type BoardData = Record<BoardType, CategoryData[]>

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
  const name = props.name ?? 'Mansion'

  const categories = boards[name] ?? []

  return (
    <div className={styles.board} data-testid="board">
      <h2 className={styles.title}>{name}</h2>

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
