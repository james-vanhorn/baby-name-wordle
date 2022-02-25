import { Cell } from './Cell'

type Props = {
  wordLength: number
  key: number
}

export const EmptyRow = ({ wordLength, key }: Props) => {
  const emptyCells = Array.from(Array(wordLength))
  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
