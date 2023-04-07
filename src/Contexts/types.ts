import { ReactNode } from 'react'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export interface TransactionContentProps {
  transactions: Transaction[]
  fetchTransaction(query?: string): Promise<void>
}
export interface TransactionContextProviderProps {
  children: ReactNode
}
