import React from 'react'
import { Content, Title, Wrap } from './style'
import { User } from 'lucide-react'

const Comment = ({ author, createdAt, bodyText }) => {
  return (
    <Wrap>
      <Title>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <User size={16} /> {author.login}
        </div>
        <span>{createdAt}</span>
      </Title>
      <Content>{bodyText}</Content>
    </Wrap>
  )
}

export default Comment
