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
  onClick,
  color = 'primary',
}: IIconButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`${styles.button} ${styles[color]} ${className}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
