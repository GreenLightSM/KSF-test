import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { GET_ISSUES } from '../../scheme'
import IssueItem from '../IssueItem'
import { ThreeDots } from 'react-loader-spinner'
import { Colors } from '../../constants/colors'
import { Grid, Left } from './style'
import IssueInfo from '../IssueInfo'

const IssuesList = () => {
  const [selected, setSelected] = useState(null)

  const { loading, data } = useQuery(GET_ISSUES, {
    variables: { first: 1 },
  })

  const issues = data?.viewer?.repositories?.nodes[0]?.issues?.nodes

  return (
    <Grid>
      <Left>
        {loading ? (
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
          issues?.map((item) => (
            <IssueItem {...item} onClick={setSelected} key={item.id} />
          ))
        )}
      </Left>
      <IssueInfo id={selected} />
    </Grid>
  )
}

export default IssuesList
