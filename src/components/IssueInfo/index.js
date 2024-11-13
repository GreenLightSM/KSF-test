import React from 'react'
import { Placeholder } from './style'
import { ADD_COMMENT_TO_ISSUE, GET_ISSUE_BY_ID, GET_ISSUES } from '../../scheme'
import { ThreeDots } from 'react-loader-spinner'
import { useMutation, useQuery } from '@apollo/client'
import { Colors } from '../../constants/colors'
import { Description, Title, TitleWrap } from '../IssueItem/style'
import { CircleDot } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import Button from '../Button'
import Comment from '../Comment'
import AddCommentForm from '../AddCommentForm'

const IssueInfo = ({ id }) => {
  const { control, handleSubmit, reset } = useForm()
  const { loading, data, refetch } = useQuery(GET_ISSUE_BY_ID, {
    variables: { issueId: id },
  })
  const [addComment, { data: comment, loading: loadingComment }] = useMutation(
    ADD_COMMENT_TO_ISSUE,
    {
      refetchQueries: [GET_ISSUES],
      onCompleted: () => {
        refetch()
        reset({ comment: '' })
      },
    }
  )
  const { title, number, author, createdAt, body, comments } = data?.node || {}

  const onSubmit = ({ comment }) =>
    addComment({ variables: { issueId: id, body: comment } })

  return id ? (
    loading ? (
      <ThreeDots
        visible={true}
        height='50'
        width='50'
        color={Colors.primary}
        radius='9'
        ariaLabel='three-dots-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
    ) : (
      <div>
        <TitleWrap>
          <CircleDot color={Colors.primary} size={18} /> <Title>{title}</Title>
        </TitleWrap>
        <Description style={{ fontSize: 12, marginBottom: 15 }}>
          #{number} createdBy
          <span style={{ fontWeight: 700 }}>{author.login}</span>{' '}
          {new Date(createdAt).toLocaleDateString('uk')}
          <br />
        </Description>

        <p>{body}</p>

        <Title style={{ marginBottom: 15 }}>Comments</Title>
        {comments?.nodes?.map((item) => (
          <Comment {...item} key={item.id} />
        ))}

        <AddCommentForm
          onClick={handleSubmit(onSubmit)}
          control={control}
          loading={loadingComment}
        />
      </div>
    )
  ) : (
    <Placeholder>Select issue to see info</Placeholder>
  )
}

export default IssueInfo
