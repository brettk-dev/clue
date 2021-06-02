import { useEffect, useState } from 'react'
import { Board, BoardType } from './components/Board'
import styles from './App.module.scss'

export const App = () => {
  const [character, setCharacter] = useState('Green')
  const [board, setBoard] = useState<BoardType>('Mansion')

  const verifyBoard = (value: string) => {
    if (value === 'Mansion' || value === 'Boardwalk') {
      setBoard(value)
    }
  }

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color--theme-100',
      `var(--color--${character.toLowerCase()}-100)`
    )
    document.documentElement.style.setProperty(
      '--color--theme-300',
      `var(--color--${character.toLowerCase()}-300)`
    )
    document.documentElement.style.setProperty(
      '--color--theme-500',
      `var(--color--${character.toLowerCase()}-500)`
    )
    document.documentElement.style.setProperty(
      '--color--theme-700',
      `var(--color--${character.toLowerCase()}-700)`
    )
    document.documentElement.style.setProperty(
      '--color--theme-900',
      `var(--color--${character.toLowerCase()}-900)`
    )
  }, [character])

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Clue Companion</h1>
        <div className={styles.controls}>
          <button className={styles.reset}>
            Reset
          </button>
          <select
            id="character"
            className={styles.select}
            name="character"
            value={character}
            onChange={(e) => setCharacter(e.currentTarget.value)}
          >
            <option>Green</option>
            <option>Mustard</option>
            <option>Peacock</option>
            <option>Plum</option>
            <option>Scarlett</option>
            <option>White</option>
          </select>
          <select
            id="location"
            className={styles.select}
            name="location"
            value={board}
            onChange={(e) => verifyBoard(e.currentTarget.value)}
          >
            <option>Mansion</option>
            <option>Boardwalk</option>
          </select>
        </div>
      </header>
      <main className={styles.content}>
        <Board key={board} name={board} />
      </main>
    </>
  )
}
