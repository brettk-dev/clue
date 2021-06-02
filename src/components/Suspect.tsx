import { FC } from 'react'
import styles from './Suspect.module.scss'

interface Props {
  name?: string
  isCleared?: boolean
  onToggle?: () => void
}

export const Suspect: FC<Props> = (props) => {
  const name = props.name ?? ''
  const isCleared = props.isCleared ?? false
  const onToggle = props.onToggle ?? (() => {})

  const classes = isCleared
    ? `${styles.suspect} ${styles.cleared}`
    : styles.suspect

  return (
    <li
      className={classes}
      onClick={() => onToggle()}
      data-testid="suspect"
    >
      {name}
    </li>
  )
}
