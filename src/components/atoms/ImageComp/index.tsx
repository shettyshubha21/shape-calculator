import React from 'react';

import styles from './Image.module.scss';
import { ImageProps } from '../../../EnumAndInterface/interface';

const ImageComp: React.FC<ImageProps> = ({ src, alt = ' ', ...props }) => {
  const className = [styles.Image, styles.align].join(' '); // joins styles with space like styles.Image styles.Size
  return (
    <div className={styles.ImageContainer}>
      {src === undefined ? (
        <h1>Image</h1>
      ) : (
        <img src={src} alt={alt} className={className} {...props}></img>
      )}
    </div>
  );
};

export default ImageComp;