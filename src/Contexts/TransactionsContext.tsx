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
  async function fetchTransaction(query?: string) {
    const url = new URL('http://localhost:3000/transactions')

    if (query) {
      url.searchParams.append('q', query)
    }

    const response = await fetch(url)
    const data = await response.json()

    setTransactions(data)
  }
  useEffect(() => {
    fetchTransaction()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}
