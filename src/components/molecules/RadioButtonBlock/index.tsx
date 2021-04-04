import React from 'react';
import Text from '../../atoms/Text';

import { RadioButtonBlockProps } from '../../../EnumAndInterface/interface';
import RadioButton from '../../atoms/RadioButton';

const RadioButtonBlock: React.FC<RadioButtonBlockProps> = ({
    label, ...props
  }) => {
  return (
    <>
        <RadioButton {...props}></RadioButton>
        <Text type="default" weight={600}>
            {label}
        </Text>   
    </>
  );
};

export default RadioButtonBlock;