import { useParams } from 'react-router';
import { useMutation, useQuery } from '@apollo/client';
import PostForm from '../components/PostForm';
import Loader from '../components/Loader';
import { GET_POST, UPDATE_POST } from '../apollo/queries';
import labels from "../ulitls/labels";

const Post = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id },
  });
  // refetchQueries: [{ query: GET_POST, variables: { id } }],
  const [updatePost] = useMutation(UPDATE_POST);

  const { post } = data ?? {};

  if (loading) return <Loader />;
  if (error) return <p>{labels.ERROR}</p>;

  return <PostForm post={post} updatePost={updatePost} id={id || ''} />;
};
export default Post;
