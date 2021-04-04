import React from 'react';
import Text from '../../atoms/Text';

import styles from './Button.module.scss';
import { InputBlockProps } from '../../../EnumAndInterface/interface';
import Input from '../../atoms/Input';

const InputBlock: React.FC<InputBlockProps> = ({
    label, ...props
  }) => {
  return (
    <>
        <Text type="default" weight={600}>
            {label}
        </Text>  
        <Input {...props}/>  
    </>
  );
};

export default InputBlock;