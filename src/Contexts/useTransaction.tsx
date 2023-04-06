import { useContext } from 'react'
import { TransactionContext } from './TransactionsContext'

export function useTransaction() {
  const context = useContext(TransactionContext)
  return context
}
