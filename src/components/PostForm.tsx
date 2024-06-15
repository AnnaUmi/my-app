import {
  Button,
  Container,
  Stack,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Post } from '../__generated__/resolvers-types';

type Props = {
  post: Post;
  updatePost: (args: any) => void;
  id: string;
};

const PostForm = ({ post, updatePost, id }: Props) => {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const form = useForm({
    initialValues: {
      title: post?.title ?? '',
      body: post?.body ?? '',
    },
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (isEdit) {
      e.preventDefault();
      form.reset();
      updatePost({ variables: { input: form.values, id } });
      setIsEdit(false);
    }
  };

  return (
    <Container size="md" py={50}>
      <Button mb={30} onClick={() => navigate('/')}>
        Back
      </Button>
      <form onClick={() => setIsEdit(true)} onMouseLeave={onSubmit}>
        <Stack gap="md">
          {isEdit ? (
            <TextInput {...form.getInputProps('title')} />
          ) : (
            <Title>{post?.title}</Title>
          )}
          {isEdit ? (
            <Textarea {...form.getInputProps('body')} />
          ) : (
            <p>{post.body}</p>
          )}
        </Stack>
      </form>
    </Container>
  );
};
export default PostForm;