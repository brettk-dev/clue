import {useState} from 'react'
import {Suspect} from './Suspect'

interface Props {
  name?: string
  suspects?: string[]
}

export const Category = (props: Props) => {
  const name = props.name ?? ''
  const suspects = props.suspects ?? []

  const [open, setOpen] = useState(true)

  return (
    <ul data-testid="category">
      <li onClick={() => setOpen(!open)}>{name}</li>
      {open && suspects.map(suspect => (
        <Suspect key={suspect} name={suspect} />
      ))}
    </ul>
  )
}
