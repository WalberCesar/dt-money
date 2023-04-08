import { createContext, useEffect, useState } from 'react'
import {
  NewTransactionProps,
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
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function createNewTransaction(data: NewTransactionProps) {
    const { category, description, price, type } = data

    const response = await api.post('/transactions', {
      category,
      description,
      price,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }
  useEffect(() => {
    fetchTransaction()
  }, [])

  return (
    <TransactionContext.Provider
      value={{
        createNewTransaction,
        transactions,
        fetchTransaction,
        setTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
