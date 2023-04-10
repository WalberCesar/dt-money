import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { Transactions } from './pages/transactions'
import { TransactionContextProvider } from './Contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionContextProvider>
        <Transactions />
      </TransactionContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
