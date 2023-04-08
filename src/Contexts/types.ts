/* eslint-disable no-undef */
import { ReactNode } from 'react'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export interface NewTransactionProps {
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
}

export interface TransactionContentProps {
  transactions: Transaction[]
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>
  fetchTransaction(query?: string): Promise<void>
  createNewTransaction({
    category,
    description,
    price,
    type,
  }: NewTransactionProps): Promise<void>
}
export interface TransactionContextProviderProps {
  children: ReactNode
}
