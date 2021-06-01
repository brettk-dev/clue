import {Suspect} from './Suspect'

interface Props {
  suspects?: string[]
}

export const Category = (props: Props) => {
  const suspects = props.suspects ?? []

  return (
    <ul data-testid="category">
      {suspects.map(suspect => (
        <Suspect key={suspect} name={suspect} />
      ))}
    </ul>
  )
}
