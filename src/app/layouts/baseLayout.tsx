import { Outlet } from 'react-router-dom';

import { Layout } from 'shared/ui/layout';

export const baseLayout = (
  <Layout>
    <Layout.Header>
      <div>HEADER</div>
    </Layout.Header>

    <Layout.Content>
      <Outlet />
    </Layout.Content>

    <Layout.Footer>
      <div>FOOTER</div>
    </Layout.Footer>
  </Layout>
);
