import React from 'react'
import { Wrap } from './style'
import { ThreeDots } from 'react-loader-spinner'

const Button = ({ text, onClick, loading }) => {
  return (
    <Wrap onClick={onClick} disabled={loading}>
      {loading ? (
        <ThreeDots
          visible={true}
          height='20'
          width='20'
          color='#fff'
          radius='9'
          ariaLabel='three-dots-loading'
          wrapperStyle={{}}
          wrapperClass=''
        />
      ) : (
        text
      )}
    </Wrap>
  )
}

export default Button
