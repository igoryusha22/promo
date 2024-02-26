import cx from 'classnames';
import React, { FC } from 'react';

import { TitleProps } from './Title.props';

const classNames = {
  h1: 'text-2xl font-extrabold text-eerie-black dark:text-white mb-4',
  h2: '',
  h3: '',
  h4: '',
  h5: '',
  h6: '',
};

export const Title: FC<TitleProps> = (props) => {
  const { type, className } = props;

  return React.createElement(type, {
    ...props,

    className: `${className} ${cx(classNames[type])}`,
  });
};
