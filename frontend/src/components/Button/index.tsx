import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface IButtonProps {
  children: ReactNode;
  type: 'submit' | 'button';
}

const Button = ({ children, type }: IButtonProps): JSX.Element => {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
