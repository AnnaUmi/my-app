import { createBrowserRouter } from 'react-router-dom';
import Post from './pages/Post';
import Posts from './pages/Posts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Posts />,
  },
  {
    path: '/posts/:id',
    element: <Post />,
  },
]);
export default router;
