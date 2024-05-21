'use client';

import cx from 'classnames';
import React, { FC } from 'react';

import BrightnessMedium from '@/shared/svg/brightness-medium.svg';
import { toggleTheme } from '@/utils/theme';

import { ThemeTogglerProps } from './ThemeToggler.types';

export const ThemeToggler: FC<ThemeTogglerProps> = (props) => {
  const { className } = props;

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <button
      className={className}
      onClick={handleClick}
      aria-label="Переключить тему"
    >
      <BrightnessMedium
        className={cx('w-8', 'h-8', 'opacity-85', 'hover:opacity-100')}
      />
    </button>
  );
};
