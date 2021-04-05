import React from 'react';

import { RadioProps } from '../../../EnumAndInterface/interface';

const RadioButton: React.FC<RadioProps> = ({
  type,
  name,
  value,
  checked,
  id,
  label,
  onChange,
}) => {
  return (
    <>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}></input>
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default RadioButton;
