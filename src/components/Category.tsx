import { useState } from 'react'
import { Suspect } from './Suspect'
import styles from './Category.module.scss'

export interface CategoryData {
  name: string
  suspects: string[]
}

interface Props extends Partial<CategoryData> {}

export const Category = (props: Props) => {
  const name = props.name ?? ''
  const suspects = props.suspects ?? []

  const [open, setOpen] = useState(true)

  return (
    <ul className={styles.list} data-testid="category">
      <li
        className={styles.header}
        onClick={() => setOpen(!open)}
        data-testid="category-header"
      >
        <div className={styles.indicator}>
          {open ? '-' : '+'}
        </div>
        <div className={styles.title}>
          {name}
        </div>
      </li>
      {open && suspects.map(suspect => (
        <Suspect key={suspect} name={suspect} />
      ))}
    </ul>
  )
}
