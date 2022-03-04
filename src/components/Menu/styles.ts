import { transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => transparentize(0.5, theme.currentLine)};
  width: 95px;
  height: 75%;
  padding: 15px 0;
  margin: auto 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  & canvas:active {
    cursor: none;
  }
`

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  user-select: none;
`
