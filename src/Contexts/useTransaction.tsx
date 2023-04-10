import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from './TransactionsContext'

export function useTransaction() {
  const {
    createNewTransaction,
    fetchTransaction,
    setTransactions,
    transactions,
  } = useContextSelector(TransactionContext, (context) => {
    return context
  })

  return {
    transactions,
    fetchTransaction,
    createNewTransaction,
    setTransactions,
  }
}
