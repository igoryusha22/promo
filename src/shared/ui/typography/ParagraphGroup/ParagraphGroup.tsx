import React, { FC } from 'react';
import cx from 'classnames';

import { ParagraphGroupProps } from './ParagraphGroup.props';

export const ParagraphGroup: FC<ParagraphGroupProps> = (props) => {
  const { className, children } = props;

  return <div className={cx('space-y-6')}>{children}</div>;
};
