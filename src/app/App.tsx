import { useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { RouterProvider } from 'react-router-dom';

import { appRouter } from './router/appRouter';
import { appStore } from './store/appStore';

import { setViewHeight } from 'shared/lib/dom';

import './styles/base.scss';

export const App = () => {
  useEffect(() => {
    setViewHeight();
  }, []);

  return (
    <ReduxProvider store={appStore}>
      <RouterProvider router={appRouter} />
    </ReduxProvider>
  );
};
