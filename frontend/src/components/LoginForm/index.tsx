import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './styles.module.scss';
import Logo from '../../../public/logo.svg';
import Input from '@components/Input';
import Button from '@components/Button';
import Link from 'next/link';
import { Pages } from '@enums/pages';
import useLogin from './useLogin';

const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setIsLoading(true);
    await useLogin(email, password);
    setIsLoading(false);
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <Input
          name="email"
          label="E-mail"
          type="email"
          value={email}
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
          Entrar
        </Button>
      </form>
      <p className={styles.text}>
        Ainda não tem uma conta?{' '}
        <Link href={Pages.REGISTER} passHref>
          <a className={styles.link}>Se cadastre aqui!</a>
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
