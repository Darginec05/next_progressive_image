import styles from './Skeleton.module.scss';

type SkeletonProps<T> = {
  style: T
}

const Skeleton = <T extends object>({ style }: SkeletonProps<T>) => <div style={style} className={styles.animation} />;

export { Skeleton };
