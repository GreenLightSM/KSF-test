import React from 'react'
import { CircleDot, MessageCircle } from 'lucide-react'
import { Description, Title, TitleWrap, Wrap } from './style'
import { Colors } from '../../constants/colors'

const IssueItem = ({
  title,
  number,
  author,
  comments,
  body,
  createdAt,
  onClick,
  id,
}) => {
  return (
    <Wrap onClick={() => onClick(id)}>
      <div>
        <TitleWrap>
          <CircleDot color={Colors.primary} size={18} /> <Title>{title}</Title>
        </TitleWrap>
        <Description>{body}</Description>
        <Description style={{ fontSize: 12 }}>
          #{number} createdBy
          <span style={{ fontWeight: 700 }}>{author.login}</span>{' '}
          {new Date(createdAt).toLocaleDateString('uk')}
          <br />
        </Description>
      </div>

      <div
        style={{ color: '#bbb', display: 'flex', alignItems: 'center', gap: 5 }}
      >
        {comments.totalCount} <MessageCircle size={16} />
      </div>
    </Wrap>
  )
}

export default IssueItem
