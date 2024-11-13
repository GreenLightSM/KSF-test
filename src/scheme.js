import { gql } from '@apollo/client'

export const GET_ISSUE_BY_ID = gql`
  query ($issueId: ID!) {
    node(id: $issueId) {
      ... on Issue {
        title
        number
        author {
          login
        }
        createdAt
        body
        bodyText
        id
        comments(first: 100) {
          totalCount
          nodes {
            author {
              login
            }
            id
            createdAt
            bodyText
          }
        }
      }
    }
  }
`

export const GET_ISSUES = gql`
  query {
    viewer {
      login
      repositories(first: 1) {
        nodes {
          name
          issues(first: 10, states: OPEN) {
            nodes {
              title
              number
              author {
                login
              }
              createdAt
              body
              id
              comments {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`

export const ADD_COMMENT_TO_ISSUE = gql`
  mutation AddCommentToIssue($issueId: ID!, $body: String!) {
    addComment(input: { subjectId: $issueId, body: $body }) {
      clientMutationId
    }
  }
`
