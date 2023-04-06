import { createContext, useEffect, useState } from 'react'
import {
  Transaction,
  TransactionContentProps,
  TransactionContextProviderProps,
} from './types'

export const TransactionContext = createContext({} as TransactionContentProps)

export function TransactionContextProvider({
  children,
}: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  async function loadTransaction() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()

    setTransactions(data)
  }
  useEffect(() => {
    loadTransaction()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
