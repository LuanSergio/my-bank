import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

import Close from '../../../public/close.svg';
import IconButton from '@components/IconButton';

import styles from './styles.module.scss';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({
  isOpen,
  onClose,
  children,
}: IModalProps): JSX.Element | null => {
  if (!isOpen) return null;

  return createPortal(
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
    </div>,
    document.getElementById('modals')!,
  );
};

export default Modal;
