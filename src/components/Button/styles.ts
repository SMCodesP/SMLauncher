import styled from 'styled-components'

export const Container = styled.button<{
  backgroundColor?: string
}>`
  width: 100%;
  height: 46px;

  outline: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.purple};
  border-radius: 8px;
  border: 0;

  color: ${({ theme }) => theme.foreground};
  font-size: 16px;
  font-weight: 500;

  cursor: pointer;

  transition: filter 0.4s;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.7);
  }
`
