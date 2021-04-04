import React, { Children } from 'react';

import styles from './Text.module.scss';
import { CardProps } from '../../../EnumAndInterface/interface';
const Card: React.FC<CardProps> = ({
    children,
  ...props
}) => {
  const style = {
    border: props.border,
  };

  const className = styles.Card;

  return (
    <div className={className} style={style}>
        {children}
    </div>
  );
};

export default Card;