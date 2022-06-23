import { ReactNode } from 'react';
import styles from './styles.module.scss';
import SpinnerLoading from '../../../public/spinner-loading.svg';

interface IButtonProps {
  children: ReactNode;
  type: 'submit' | 'button';
  color?: 'primary' | 'light';
  disabled?: boolean;
  isLoading?: boolean;
}

const Button = ({
  children,
  type,
  isLoading = false,
  disabled = false,
  color = 'light',
}: IButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[color]}`}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <>
          <SpinnerLoading />
        </>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default Button;
