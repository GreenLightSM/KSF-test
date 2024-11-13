import styled from '@emotion/styled'
import { Colors } from '../../constants/colors'

export const Wrap = styled.button`
  padding: 5px 25px;
  border-radius: 5px;
  background-color: ${Colors.primary};
  color: #fff;
  font-weight: 700;
  border: none;
  cursor: pointer;
  height: 40px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #6dc69d;
  }
`
