import { FC } from 'react'
import { GlobalStyle } from './styles/GlobalStyle'

import { ThemeProvider } from 'styled-components'
import themes from './themes'
import { AuthProvider } from './contexts/AuthContext'

const App: FC = ({ children }) => {
  return (
    <ThemeProvider theme={themes.dark}>
      <AuthProvider>
        {children}

        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
