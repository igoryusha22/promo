import cx from 'classnames';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import { isProduction } from '@/utils/isProduction';

import './globals.css';
// import { PageLoader } from '@/components/PageLoader/PageLoader';

export const metadata: Metadata = {
  title: 'Игорь Нерусин',
  description: 'Игорь Нерусин – senior frontend разработчик',
  keywords: [],
  other: {
    'google-site-verification': 'w9HsermTjFmoJY1UWDeWlexYDG4EhbLgB_XBniGYE2U',
  },
};

const Layout = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <html lang="en">
      <body
        className={cx(
          'font-sans',
          'text-primary',
          'leading-tight',
          'bg-primary',
          'antialiased'
        )}
      >
        {children}

        {/* <PageLoader /> */}
      </body>

      {isProduction() && <GoogleAnalytics gaId="G-9JYMW045MP" />}
    </html>
  );
};

export default Layout;
