import React from 'react';

type DefaultProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export interface LinkProps extends Omit<DefaultProps, 'ref'> {
  ref?: React.MutableRefObject<HTMLAnchorElement>;
  isExternal?: boolean;
}
