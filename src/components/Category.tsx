import { FC, useEffect, useState } from 'react'
import { Dispatch } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { setSuspects, toggleSuspect } from '../store/actions'
import { Suspect } from './Suspect'
import styles from './Category.module.scss'
import { SuspectState } from '../store/reducers/suspect'

export interface CategoryData {
  name: string
  suspects: string[]
}

interface Props extends Partial<CategoryData> {}

export const Category: FC<Props> = (props) => {
  const name = props.name ?? ''

  const [open, setOpen] = useState(true)
  const suspects = useSelector((state: {suspects: SuspectState}) => state.suspects[name]) ?? []
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    dispatch(setSuspects(name, props.suspects ?? []))
  }, [dispatch, props.suspects, name])

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

      {open && suspects && suspects.filter(suspect => !suspect.isCleared).map(suspect => (
        <Suspect
          key={suspect.name}
          name={suspect.name}
          isCleared={suspect.isCleared}
          onToggle={() => dispatch(toggleSuspect(name, suspect.name))}
        />
      ))}

      {open && suspects && suspects.filter(suspect => suspect.isCleared).map(suspect => (
        <Suspect
          key={suspect.name}
          name={suspect.name}
          isCleared={suspect.isCleared}
          onToggle={() => dispatch(toggleSuspect(name, suspect.name))}
        />
      ))}
    </ul>
  )
}
