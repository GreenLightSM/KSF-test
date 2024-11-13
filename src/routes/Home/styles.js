import styled from '@emotion/styled'
import { Colors } from '../../constants/colors'

export const Wrap = styled.div`
  padding: 15px;
  max-width: 960px;
  margin: 0 auto;
`
export const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  position: relative;
  width: fit-content;
  margin: 0 auto;
  color: ${Colors.primary};
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: calc(50% + 2px);
    height: 2px;
    width: 100px;
    background-color: ${Colors.primary};
    left: -115px;
  }
  &::after {
    left: auto;
    right: -115px;
  }
`
