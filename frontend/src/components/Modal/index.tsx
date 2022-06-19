import styles from './styles.module.scss';
import Button from '@components/Button';
import Input from '@components/Input';
import { ChangeEvent, ReactNode, useState } from 'react';
import Close from '../../../public/close.svg';
import IconButton from '@components/IconButton';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: IModalProps): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <IconButton
          color="neutral"
          className={styles.closeButton}
          label="Edit"
          onClick={onClose}
        >
          <Close className={styles.closeIcon} />
        </IconButton>

        <>{children}</>
      </div>
      <div className={styles.overlay} onClick={onClose}></div>
    </div>
  );
};

export default Modal;
