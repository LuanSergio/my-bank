import { ChangeEvent, FormEvent, useState } from 'react';
import client from '@services/axios';
import Cookies from 'js-cookie';
import styles from './styles.module.scss';
import Logo from '../../../public/logo.svg';
import Input from '@components/Input';
import Button from '@components/Button';

interface IRegisterResponse {
  data: {
    accessToken: string;
    user: {
      email: string;
    };
  };
}

const RegisterForm = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function createUser() {
    const response: IRegisterResponse = await client.post('/register', {
      email,
      password,
    });

    Cookies.set(
      process.env.NEXT_PUBLIC_COOKIE_NAME as string,
      response.data.accessToken,
    );
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await createUser();
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    console.log('change email');
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <form onSubmit={handleSubmit} className={styles.form}>
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

        <Button type="submit">Criar</Button>
      </form>
    </div>
  );
};

export default RegisterForm;