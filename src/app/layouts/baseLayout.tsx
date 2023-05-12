import { Outlet } from 'react-router-dom';

import { Layout } from 'shared/ui/Layout';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';

export const baseLayout = (
  <Layout>
    <Layout.Header>
      <Header />
    </Layout.Header>

    <Layout.Content>
      <Outlet />
    </Layout.Content>

    <Layout.Footer>
      <Footer />
    </Layout.Footer>
  </Layout>
);
