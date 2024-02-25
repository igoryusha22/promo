import cx from 'classnames';
import React, { FC } from 'react';

import { ParagraphProps } from './Paragraph.props';

export const Paragraph: FC<ParagraphProps> = (props) => {
  const { children, className } = props;

  return (
    <p
      className={cx(
        'text-lg',
        'text-grey-darkest',
        'leading-normal',
        'text-raisin-black',
        // 'dark:text-white',
        className
      )}
    >
      {children}
    </p>
  );
};
