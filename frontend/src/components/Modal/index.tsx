import styles from './styles.module.scss';
import Button from '@components/Button';
import Input from '@components/Input';
import { ChangeEvent, useState } from 'react';

const Modal = (): JSX.Element => {
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
        <form className={styles.form}>
          <h1 className={styles.title}>Cadastro</h1>
          <Input
            name="email"
            label="E-mail"
            value={email}
            type="email"
            required
            onChange={handleEmailChange}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            value={password}
            required
            onChange={handlePasswordChange}
          />

          <Button type="submit" isLoading={isLoading}>
            Criar
          </Button>
        </form>
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default Modal;
