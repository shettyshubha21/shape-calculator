import React from 'react';
import Image from '../../atoms/ImageComp/index';
import Text from '../../atoms/Text/index';

import styles from './Header.module.scss';
import src from '../../../images/images.jpeg';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.border}>
        <Image src={src} alt="header Img"></Image>
        <div className={styles.heading}>
          <Text type="heading">Shape Calculator</Text>
        </div>
      </div>
    </div>
  );
};

export default Header;