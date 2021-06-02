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
  const suspectsFromProps = props.suspects ?? []

  const [open, setOpen] = useState(true)
  const [suspects, setSuspects] = useState(suspectsFromProps.map(name => ({
    name,
    isCleared: false
  })))

  const setIsCleared = (name: string, value: boolean) => {
    setSuspects(suspects.map(sus => {
      if (sus.name === name) {
        return {
          ...sus,
          isCleared: value
        }
      }
      return sus
    }))
  }

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

      {open && suspects.filter(suspect => !suspect.isCleared).map(suspect => (
        <Suspect
          key={suspect.name}
          name={suspect.name}
          isCleared={suspect.isCleared}
          setIsCleared={(value) => setIsCleared(suspect.name, value)}
        />
      ))}

      {open && suspects.filter(suspect => suspect.isCleared).map(suspect => (
        <Suspect
          key={suspect.name}
          name={suspect.name}
          isCleared={suspect.isCleared}
          setIsCleared={(value) => setIsCleared(suspect.name, value)}
        />
      ))}
    </ul>
  )
}
