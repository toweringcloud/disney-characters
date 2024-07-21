import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Error from './components/Error';
import NotFound from './components/NotFound';
import Home from './screens/Home';
import Detail from './screens/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: 'character/:id',
        element: <Detail />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
