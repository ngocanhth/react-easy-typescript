import  React, {ReactNode, ReactText, ReactElement, ReactChild } from 'react';

export interface MyTextProps {
    title?: string,
 //   children?: ReactText,
     //   children?: ReactChild[] | ReactChild,
    children?: React.ReactNode,
 // children?: ReactElement | ReactChild,
}

export function MyText ({title, children}: MyTextProps) {
  return (
    <div>
     {children}
    </div>
  );
}
