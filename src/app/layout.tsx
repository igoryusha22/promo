import cx from 'classnames';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Igor Nerusin',
  description: 'Senior frontend developer',
  other: {
    'google-site-verification': 'm6atag6NQbKhsMjHydz9ZEOkrkO921jsK5qGtH5voWc',
  },
};

const RootLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <html lang="en">
      <body
        className={cx(
          'font-sans',
          'text-black',
          'leading-tight',
          'antialiased'
        )}
      >
        <div className={cx('py-8', 'lg:py-16', 'px-6', 'md:px-16', 'lg:px-24')}>
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
