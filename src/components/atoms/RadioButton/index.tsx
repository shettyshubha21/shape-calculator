import React from 'react';

import styles from './Button.module.scss';
import { RadioProps } from '../../../EnumAndInterface/interface';

const RadioButton: React.FC<RadioProps> = ({
  type,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <input type={type} name={name} value={value} checked={checked} onChange={onChange}>
    </input>
  );
};

export default RadioButton;