import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface IIconButtonProps {
  children: ReactNode;
  label: string;
  color?: 'primary' | 'neutral';
  onClick: () => void;
}

const IconButton = ({
  children,
  label,
  color = 'primary',
}: IIconButtonProps): JSX.Element => {
  return (
    <button aria-label={label} className={`${styles.button} ${styles[color]}`}>
      {children}
    </button>
  );
};

export default IconButton;
