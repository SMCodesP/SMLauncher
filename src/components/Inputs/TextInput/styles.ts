import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

export const TextError = styled.span`
  color: ${({ theme }) => theme.red};
  font-weight: normal;
  font-size: 11px;
`

export const Input = styled.input<{
  borderColor: string
}>`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.selection};
  border: 1px solid
    ${({ theme, borderColor }) => borderColor || theme.background}88;
  padding: 10px 15px;
  outline: 0;
  color: ${({ theme }) => theme.foreground};
  line-height: 20px;
  font-size: 15px;
  transition: border 0.4s;

  &:focus {
    border: 1px solid
      ${({ theme, borderColor }) => borderColor || theme.purple}88;
  }
`
export const LabelInput = styled.label<{
  color: string
}>`
  font-weight: bold;
  opacity: 0.8;
  text-transform: uppercase;
  width: fit-content;
  font-size: 13px;
  color: ${({ color }) => color};
`
