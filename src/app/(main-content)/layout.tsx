import { MainLayout } from '@/components/MainLayout';

const Layout = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return <MainLayout isMainContent>{children}</MainLayout>;
};

export default Layout;
