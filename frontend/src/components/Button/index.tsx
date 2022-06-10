import { ReactNode } from 'react';
import styles from './styles.module.scss';
import SpinnerLoading from '../../../public/spinner-loading.svg';

interface IButtonProps {
  children: ReactNode;
  type: 'submit' | 'button';
  disabled?: boolean;
  isLoading?: boolean;
}

const Button = ({
  children,
  type,
  isLoading = false,
  disabled = false,
}: IButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      className={styles.button}
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
