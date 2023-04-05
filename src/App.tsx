import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { Transactions } from './pages/transactions'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions />

      <GlobalStyle />
    </ThemeProvider>
  )
}
