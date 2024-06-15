import { List } from '@mantine/core';
import { Post } from '../__generated__/resolvers-types';
import { Link } from 'react-router-dom';

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => {
  return (
    <List>
      {posts.map((item: Post) => {
        return (
          <List.Item key={item.id}>
            <Link to={`/posts/${item.id}`}>{item.title}</Link>
          </List.Item>
        );
      })}
    </List>
  );
};
export default PostList;
