import { gql } from '@apollo/client';

export const GET_POST = gql`
  query ($id: ID!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      body
    }
  }
`;

export const GET_POSTS = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;