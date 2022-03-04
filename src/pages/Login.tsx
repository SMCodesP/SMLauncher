import { FC } from 'react'

import { BsDiscord } from 'react-icons/bs'

import { Button } from '../components/Button'
import TextInput from '../components/Inputs/TextInput'
import {
  ButtonAnimationLogin,
  Container,
  ContainerLoging,
  ContainerLoginSteps,
  ContainerLoginTraditional,
  ForgotPassword,
  FormContainer,
  Loader,
  LoginConnectServices,
  NotHaveAccount,
  SubTitle,
  Title,
} from '../styles/pages/login'

import { useAuth } from '../contexts/AuthContext'

export interface FormDataLogin {
  email: string
  password: string
}

const Login: FC = () => {
  const { signIn, formRef, loginLoading, setLoginLoading } = useAuth()

  return (
    <Container>
      <FormContainer ref={formRef} onSubmit={signIn}>
        <ContainerLoginTraditional>
          <Title>Bem-vindo de volta!</Title>
          <SubTitle>Conecte-se no melhor launcher de minecraft!</SubTitle>
          <ContainerLoginSteps>
            <TextInput name="email" id="email" label="e-mail ou username" />
            <TextInput
              name="password"
              id="password"
              label="senha"
              type="password"
            />
          </ContainerLoginSteps>
          <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
          <ContainerLoging>
            <ButtonAnimationLogin
              onClick={() => setLoginLoading(true)}
              type="submit"
              loginLoading={loginLoading}
            >
              Entrar
            </ButtonAnimationLogin>
            <Loader loginLoading={loginLoading} />
          </ContainerLoging>
          <NotHaveAccount>
            Não possuí uma conta? <a>Registre-se</a>
          </NotHaveAccount>
        </ContainerLoginTraditional>
        <hr />
        <LoginConnectServices>
          <Title>Conecte-se com</Title>
          <Button backgroundColor="#5865F2" Icon={<BsDiscord size={18} />}>
            Discord
          </Button>
        </LoginConnectServices>
      </FormContainer>
    </Container>
  )
}

export default Login
