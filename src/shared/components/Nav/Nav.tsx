'use client';

import cx from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import React, { FC } from 'react';

import { NavProps } from './Nav.types';

export const Nav: FC<NavProps> = (props) => {
  const { className, items } = props;

  const pathname = usePathname();

  return (
    <nav className={twMerge(cx('text-lg', 'leading-normal', className))}>
      <ul
        className={cx(
          'flex',
          'uppercase',
          'tracking-wide',
          'text-xs',
          'space-x-6'
        )}
      >
        {items.map((item, index) => {
          const { text, href, isUnreleased } = item;

          const isActive = pathname.startsWith(href);

          const linkClassName = cx('font-semibold', 'text-secondary', {
            'text-opacity-70': !isActive,
            'hover:text-opacity-100': !isActive && !isUnreleased,

            'no-underline': !isUnreleased,
            'line-through': isUnreleased,
          });

          return (
            <li key={index}>
              {isUnreleased ? (
                <span className={linkClassName}>{text}</span>
              ) : (
                <Link className={linkClassName} href={href}>
                  {text}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
