import React from 'react';

type DefaultProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export interface NavProps extends DefaultProps {
  items: {
    text: React.ReactNode;
    href: string;
    isUnreleased?: boolean;
  }[];
}
