/* eslint-disable no-underscore-dangle */
import { memo, ReactElement, useMemo, useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';

import styles from './ProgressiveImage.module.scss';

type ImageProps = {
  src: string;
  width: number | string;
  height: number | string;
};

const isNumber = (value: unknown): boolean => typeof value === 'number';

const ProgressiveImageRender = ({ src, height, width }: ImageProps): ReactElement => {
  const [isLoaded, setLoaded] = useState<boolean>(false);

  const getBlurDimensions = useMemo(() => {
    const _w: number = isNumber(width) ? +width / 30 : 5;
    const _h: number = isNumber(height) ? +height / 30 : 5;

    return { width: _w, height: _h };
  }, [width, height]);

  return (
    <div style={{ width, height, minHeight: height }} className={styles.container}>
      <Image
        src={src}
        layout="fixed"
        quality={1}
        priority
        {...getBlurDimensions}
        className={cx(styles.blur)}
        alt={`blur_${src}`}
      />
      <Image
        src={src}
        layout="fill"
        quality={100}
        onLoad={() => setLoaded(true)}
        className={cx({ [styles.hidden]: !isLoaded })}
        alt={src}
      />
    </div>
  );
};

export const ProgressiveImage = memo(ProgressiveImageRender);
