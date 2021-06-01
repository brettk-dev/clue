import {Suspect} from './Suspect'

interface Props {
  name?: string
  suspects?: string[]
}

export const Category = (props: Props) => {
  const name = props.name ?? ''
  const suspects = props.suspects ?? []

  return (
    <ul data-testid="category">
      <li>{name}</li>
      {suspects.map(suspect => (
        <Suspect key={suspect} name={suspect} />
      ))}
    </ul>
  )
}
