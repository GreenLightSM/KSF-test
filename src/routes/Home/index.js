import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Title, Wrap } from './styles'
import IssuesList from '../../components/IssuesList'

const Home = () => {
  return (
    <Wrap>
      <Title style={{ marginBottom: 50 }}>KSF test task Oleksandr Muryi</Title>
      <IssuesList />
    </Wrap>
  )
}

export default Home
