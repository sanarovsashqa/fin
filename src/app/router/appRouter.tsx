import { createBrowserRouter } from 'react-router-dom';

import { baseLayout } from '../layouts';

export const appRouter = createBrowserRouter([
  {
    element: baseLayout,
    errorElement: <div>404</div>,
    children: [
      {
        path: '/',
        element: <div>Hello!</div>,
      },
    ],
  },
]);
