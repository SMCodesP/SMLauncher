import { FormHandles, SubmitHandler } from '@unform/core'
import {
  createContext,
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from 'react'

import * as Yup from 'yup'

import TUser from '../@types/TUser'
import { FormDataLogin } from '../pages/Login'

type AuthType = {
  user: TUser | null
  setUser: Dispatch<SetStateAction<TUser | null>>
  signIn: SubmitHandler<FormDataLogin>
  formRef: MutableRefObject<FormHandles>
  loginLoading: boolean
  setLoginLoading: Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext<AuthType>({} as AuthType)

const AuthProvider: FC = ({ children }) => {
  const formRef = useRef<FormHandles>(null)
  const [user, setUser] = useState<TUser | null>(null)
  const [loginLoading, setLoginLoading] = useState(false)

  const signIn: AuthType['signIn'] = async data => {
    const schema = Yup.object().shape({
      password: Yup.string()
        .min(8, 'Senha deve ter mais bde 8 caracteres.')
        .required('A senha é obrigatória.'),
      email: Yup.string().required('O email ou username é obrigatório.'),
    })

    try {
      const result = await schema.validate(data)

      console.log(result)
      setTimeout(() => {
        setLoginLoading(false)
        setUser({
          email: 'smcodes@dev.com',
          username: 'SMCodes',
        })
      }, 6000)
    } catch (error) {
      console.log(JSON.stringify(error))
      console.log(error.path)
      console.log(error.message)
      formRef.current.setFieldError(error.path, error.message)
      setLoginLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signIn,
        formRef,
        loginLoading,
        setLoginLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthType {
  const context = useContext(AuthContext)

  return context
}

export { useAuth, AuthProvider }

export default AuthContext
