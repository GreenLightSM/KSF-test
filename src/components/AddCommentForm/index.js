import React from 'react'
import { Title } from '../IssueItem/style'
import { Controller } from 'react-hook-form'
import Button from '../Button'

const AddCommentForm = ({ onClick, loading, control }) => {
  return (
    <div>
      <Title style={{ marginTop: 25 }}>Add comment</Title>
      <Controller
        control={control}
        name='comment'
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <textarea
              onChange={onChange}
              value={value}
              style={{
                width: '100%',
                marginTop: 10,
                borderColor: error ? 'red' : '#eaeaea',
                borderRadius: 5,
                resize: 'none',
                outline: 'none',
                padding: 5,
                marginBottom: 15,
              }}
              rows={5}
            />
            {error && (
              <span style={{ color: 'red' }}>This field is required</span>
            )}
          </>
        )}
      />
      <Button text='Submit' onClick={onClick} loading={loading} />
    </div>
  )
}

export default AddCommentForm
