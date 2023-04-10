import { useMemo } from 'react'
import { useTransaction } from '../Contexts/useTransaction'

export function useSummary() {
  const { transactions } = useTransaction()

  const summary = useMemo(
    () =>
      transactions.reduce(
        (acc, transaction) => {
          if (transaction.type === 'income') {
            acc.income += transaction.price
            acc.total += transaction.price
          } else {
            acc.total -= transaction.price
            acc.outcome -= transaction.price
          }
          return acc
        },
        {
          income: 0,
          outcome: 0,
          total: 0,
        },
      ),
    [transactions],
  )

  return summary
}
