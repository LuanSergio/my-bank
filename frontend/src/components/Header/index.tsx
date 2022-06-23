import Link from 'next/link';

import { Pages } from '@enums/pages';
import styles from './styles.module.scss';
import Logo from '../../../public/logo.svg';
import getLoggedUser from '@utils/getLoggedUser';
import Cookies from 'js-cookie';
import Router from 'next/router';
import { useEffect, useState } from 'react';

const Header = (): JSX.Element => {
  const [loggedUser, setLoggedUser] = useState<string | undefined>();

  function handleLogout() {
    Cookies.remove(process.env.NEXT_PUBLIC_COOKIE_NAME as string);
    Router.replace(Pages.LOGIN);
  }

  useEffect(() => {
    setLoggedUser(getLoggedUser());
  }, []);

  return (
    <header className={`h-container ${styles.header}`}>
      <Link href={Pages.HOME} passHref>
        <a aria-label="my-bank">
          <Logo className={styles.logo} />
        </a>
      </Link>

      <div className={styles.menu}>
        {loggedUser ? (
          <>
            <button onClick={handleLogout} className={`${styles.logout}`}>
              Sair
            </button>
          </>
        ) : (
          <>
            <Link href={Pages.LOGIN} passHref>
              <a className={`${styles.menuItem} ${styles.login}`}>Entrar</a>
            </Link>
            <Link href={Pages.REGISTER} passHref>
              <a className={`${styles.menuItem} ${styles.register}`}>
                Cadastre-se
              </a>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
