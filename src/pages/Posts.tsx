import { gql, useQuery } from '@apollo/client';
import { Container, List } from '@mantine/core';
import Loader from '../components/Loader';
import { Post } from '../__generated__/resolvers-types';
import { Link } from 'react-router-dom';
import labels from '../ulitls/labels';

const GET_POSTS = gql`
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
const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <Loader />;
  if (error) return <p>{labels.ERROR}</p>;
  return (
    <Container size="md" py={50}>
      <List>
        {data?.posts?.data.map((item: Post) => {
          return (
            <List.Item key={item.id}>
              <Link to={`/posts/${item.id}`}>{item.title}</Link>
            </List.Item>
          );
        })}
      </List>
    </Container>
  );
};
export default Posts;
