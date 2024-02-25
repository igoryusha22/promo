import cx from 'classnames';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import React, { FC } from 'react';

import { NavProps } from './Nav.props';

export const Nav: FC<NavProps> = (props) => {
  const { className, items } = props;

  return (
    <nav
      className={twMerge(
        cx(
          'text-lg',
          'text-grey-darkest',
          'leading-normal',
          'text-raisin-black',
          // 'dark:text-white',
          className
        )
      )}
    >
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

          const linkClassName = cx('text-gray-400', 'font-semibold', {
            'no-underline': !isUnreleased,
            'hover:text-black': !isUnreleased,
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
