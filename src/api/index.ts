import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export const queryView1 = () => {
  console.log('query for View1')

  return useQuery(gql`
    query {
      helloQ1
    }
  `)
}

export const queryView2 = () => {
  console.log('query for View2')

  return useQuery(gql`
    query {
      helloQ2
    }
  `)
}