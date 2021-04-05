import React from 'react';
import Text from '../../atoms/Text';

import { InputBlockProps } from '../../../EnumAndInterface/interface';
import Input from '../../atoms/Input';

const InputBlock: React.FC<InputBlockProps> = ({ label, ...props }) => {
  return (
    <>
      <Text type="default" weight={500} size={'18px'}>
        {label}
      </Text>
      <Input {...props} />
    </>
  );
};

export default InputBlock;
