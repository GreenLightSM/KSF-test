import styled from '@emotion/styled'

export const Wrap = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eaeaea;
  border-bottom: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #eaeaea;
  }
  &:last-child {
    border-bottom: 1px solid #eaeaea;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &:first-child {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
`

export const Title = styled.div`
  font-weight: 700;
`

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Description = styled.div`
  color: #bbb;
  font-size: 14px;
  margin-top: 5px;
  display: flex;
  gap: 5px;
`
