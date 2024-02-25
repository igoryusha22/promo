import React from 'react';

type DefaultProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export interface TitleProps extends DefaultProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
