import { createContext, useEffect, useState } from 'react'
import {
  Transaction,
  TransactionContentProps,
  TransactionContextProviderProps,
} from './types'
import { api } from '../lib/axios'

export const TransactionContext = createContext({} as TransactionContentProps)

export function TransactionContextProvider({
  children,
}: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  async function fetchTransaction(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query,
      },
    })

    setTransactions(response.data)
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
