import { useQuery } from '@apollo/client';
import { Container } from '@mantine/core';
import Loader from '../components/core/Loader';
import PostList from '../components/PostList';
import labels from '../ulitls/labels';
import { GET_POSTS } from '../apollo/queries';

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <Loader />;
  if (error) return <p>{labels.ERROR}</p>;

  return (
    <Container size="md" py={50}>
      <PostList posts={data?.posts?.data ?? []} />
    </Container>
  );
};
export default Posts;
