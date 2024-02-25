import cx from 'classnames';
import React, { FC } from 'react';
import InternalLink from 'next/link';

import { LinkProps } from './Link.props';

export const Link: FC<LinkProps> = (props) => {
  const {
    type,
    rel,
    href = '',
    isExternal,
    className,
    children,
    ...rest
  } = props;

  const defaultProps = {
    className: cx('font-bold', 'underline', className),
  };

  if (isExternal) {
    return (
      <a
        href={href}
        rel={rel || 'nofollow noopener'}
        target="_blank"
        {...defaultProps}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return <InternalLink rel={rel} href={href} {...defaultProps} {...rest} />;
};
