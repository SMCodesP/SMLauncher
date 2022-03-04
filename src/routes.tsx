import { FC } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import Home from './pages/Home'
import Login from './pages/Login'

const RoutesComponent: FC = () => {
  const { user } = useAuth()

  return (
    <HashRouter>
      <Routes location={user ? '/login' : '/home'}>
        {!user && <Route path="login" element={<Login />} />}
        <Route path="home" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default RoutesComponent
