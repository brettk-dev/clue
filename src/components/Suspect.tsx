import styles from './Suspect.module.scss'

interface Props {
  name?: string
  isCleared?: boolean
  setIsCleared?: (isCleared: boolean) => void
}

export const Suspect = (props: Props) => {
  const name = props.name ?? ''
  const isCleared = props.isCleared ?? false
  const setIsCleared = props.setIsCleared ?? (() => {})

  const classes = isCleared
    ? `${styles.suspect} ${styles.cleared}`
    : styles.suspect

  return (
    <li
      className={classes}
      onClick={() => setIsCleared(!isCleared)}
      data-testid="suspect"
    >
      {name}
    </li>
  )
}
