import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import { FC } from 'react';

import { Text } from '@igoryusha22/promo-ui/Text';

import { Nav } from '@/shared/components/Nav';
import { SocialLinks } from '@/shared/components/SocialLinks';
import { ThemeToggler } from '@/shared/components/ThemeToggler';

import { MainLayoutProps } from './MainLayout.types';

export const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children, isMainContent } = props;

  return (
    <div className={cx('py-8', 'lg:py-16', 'px-6', 'md:px-16', 'lg:px-24')}>
      <header
        className={cx('flex', 'flex-col', 'lg:flex-row', 'lg:items-center')}
      >
        <a
          className={cx(
            cx(
              'mb-4',
              'lg:mb-0',
              'flex',
              'shrink-0',
              'mr-4',
              'md:mr-6',
              'lg:mr-12'
            )
          )}
          href="/"
        >
          <Image
            className={cx(
              'h-10',
              'w-10',
              'md:h-12',
              'md:w-12',
              'lg:h-20',
              'lg:w-20',
              'rounded-full'
            )}
            src="/igornerusin.png"
            alt="Игорь Нерусин"
            width={400}
            height={400}
          />
        </a>

        <div>
          <Text
            className="mb-3 lg:mb-4 font-extrabold leading-none lg:leading-tight text-xl lg:text-3xl"
            as={isMainContent ? 'h1' : 'h2'}
          >
            <Link className="no-underline" href="/">
              Игорь Нерусин
            </Link>
          </Text>

          <Nav
            items={[
              {
                text: 'Статьи',
                href: '/articles',
              },
              {
                text: 'Проекты',
                href: '/projects',
              },
            ]}
          />
        </div>
      </header>

      <div className={cx('lg:ml-32', 'mt-12', 'max-w-screen-sm')}>
        {children}

        <div className={cx('flex', 'mt-10')}>
          <ThemeToggler />

          <div
            className={cx('mx-5', 'bg-current', 'rounded-full')}
            style={{
              width: '0.125rem',
            }}
          />

          <SocialLinks />
        </div>
      </div>
    </div>
  );
};
