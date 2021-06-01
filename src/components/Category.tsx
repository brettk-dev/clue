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

  const listClass = 'suspect-list'
  const headerClass = `${listClass}__header`
  const indicatorClass = `${listClass}__indicator`
  const titleClass = `${listClass}__title`

  return (
    <ul className={listClass} data-testid="category">
      <li
        className={headerClass}
        onClick={() => setOpen(!open)}
        data-testid="category-header"
      >
        <div className={indicatorClass}>
          {open ? '-' : '+'}
        </div>
        <div className={titleClass}>
          {name}
        </div>
      </li>
      {open && suspects.map(suspect => (
        <Suspect key={suspect} name={suspect} />
      ))}
    </ul>
  )
}
