import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

//styles
import s from './index.module.css';

type ContainerProps = {
  children: ReactNode;
};

const ContainerWrapper: FC<ContainerProps> = ({ children }) => {
  return <div className={cn(s.container)}>{children}</div>;
};

export default ContainerWrapper;
