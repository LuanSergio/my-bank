import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface IIconButtonProps {
  children: ReactNode;
  label: string;
  className?: string;
  color?: 'primary' | 'neutral';
  onClick: () => void;
}

const IconButton = ({
  children,
  label,
  className,
  color = 'primary',
}: IIconButtonProps): JSX.Element => {
  return (
    <button
      aria-label={label}
      className={`${styles.button} ${styles[color]} ${className}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
