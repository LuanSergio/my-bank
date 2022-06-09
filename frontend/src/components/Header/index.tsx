import Link from 'next/link';

import { Pages } from '@enums/pages';
import styles from './styles.module.scss';
import Logo from '../../../public/logo.svg';

const Header = (): JSX.Element => {
  return (
    <header className={`${styles.header}`}>
      <Link href={Pages.HOME} passHref>
        <a aria-label="my-bank">
          <Logo className={styles.logo} />
        </a>
      </Link>

      <div className={styles.menu}>
        <Link href={Pages.LOGIN} passHref>
          <a className={`${styles.menuItem} ${styles.login}`}>Entrar</a>
        </Link>
        <Link href={Pages.REGISTER} passHref>
          <a className={`${styles.menuItem} ${styles.register}`}>Cadastre-se</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
