interface Props {
  name?: string
  isCleared?: boolean
  setIsCleared?: (isCleared: boolean) => void
}
export const Suspect = (props: Props) => {
  const name = props.name ?? ''
  const isCleared = props.isCleared ?? false
  const setIsCleared = props.setIsCleared ?? (() => {})

  const baseClass = 'suspect-list__suspect'
  const classes = isCleared
    ? `${baseClass} ${baseClass}--cleared`
    : baseClass

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
