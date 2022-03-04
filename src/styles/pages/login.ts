import styled, { keyframes } from 'styled-components'
import { lighten, transparentize } from 'polished'
import { Form } from '@unform/web'
import { Button } from '../../components/Button'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled(Form)`
  position: relative;
  width: 50%;
  display: flex;
  padding: 25px;
  background: ${({ theme }) => transparentize(0.5, theme.currentLine)};
  border-radius: 8px;
  gap: 35px;
  backdrop-filter: blur(5px);

  & hr {
    border: 0;
    width: 1px;
    background-color: ${({ theme }) => lighten(0.2, theme.currentLine)};
  }
`

export const ContainerLoginTraditional = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 8px;
  text-align: center;
`

export const SubTitle = styled.h2`
  font-size: 17px;
  font-weight: normal;
  opacity: 0.75;
  text-align: center;
`

export const ForgotPassword = styled.a`
  margin: 8px 0 24px 0;
  font-size: 14px;
`

export const NotHaveAccount = styled.p`
  display: flex;
  gap: 5px;
  font-size: 14px;
  color: ${({ theme }) => lighten(0.2, theme.currentLine)};
  font-weight: 500;
  margin-top: 10px;
`

export const ContainerLoginSteps = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`

export const LoginConnectServices = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 18px;
`

const animationLoader = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const ContainerLoging = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Loader = styled.div<{
  loginLoading: boolean
}>`
  width: ${({ loginLoading }) => (loginLoading ? '42px' : '0')};
  height: 42px;
  overflow: hidden;
  display: inline-block;
  border: ${({ loginLoading }) => (loginLoading ? '8px' : '0')} solid
    ${({ theme }) => theme.background}; /* Light grey */
  border-top: ${({ loginLoading }) => (loginLoading ? '8px' : '0')} solid
    ${({ theme }) => theme.purple};
  border-radius: 50%;
  transition: width 0.8s;
  align-self: center;
  animation: ${animationLoader} 2s cubic-bezier(0, 2.1, 0.75, 0.35) infinite;
  position: absolute;
`

export const ButtonAnimationLogin = styled(Button)<{
  loginLoading: boolean
}>`
  overflow: hidden;
  width: ${({ loginLoading }) => (loginLoading ? '0' : '100%')};
  display: inline-block;
  align-self: center;
  transition: width 0.4s;
`
