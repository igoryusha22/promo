import cx from 'classnames';
import type { Metadata } from 'next';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';
import {
  DARK_THEME,
  LIGHT_THEME,
  THEME_COLOR,
  getCurrentTheme,
  setTheme,
} from '@/utils/theme';

import { isProduction } from '@/utils/isProduction';

import './globals.css';
// import { PageLoader } from '@/components/PageLoader/PageLoader';

export const metadata: Metadata = {
  title: 'Игорь Нерусин',
  description: 'Игорь Нерусин – senior frontend разработчик',
  keywords: [
    'Игорь Нерусин',
    'frontend',
    'frontend разработчик',
    'frontend developer',
    'senior',
  ],
  other: {
    'google-site-verification': 'w9HsermTjFmoJY1UWDeWlexYDG4EhbLgB_XBniGYE2U',
    'theme-color': ' ',
  },
};

const Layout = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    // susspress class warning for theme
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cx(
          'font-sans',
          'text-primary',
          'leading-tight',
          'bg-primary',
          'antialiased'
        )}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: /* js */ `
              try {
                if (localStorage.theme === '${DARK_THEME}' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('${DARK_THEME}')
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${THEME_COLOR[DARK_THEME]}')
                } else {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${THEME_COLOR[LIGHT_THEME]}')
                  document.documentElement.classList.remove('${DARK_THEME}')
                }
              } catch (_) {}
          `,
          }}
        ></script>

        {children}

        {/* <PageLoader /> */}
      </body>

      {isProduction() && <GoogleAnalytics gaId="G-9JYMW045MP" />}
    </html>
  );
};

export default Layout;
