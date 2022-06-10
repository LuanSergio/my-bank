import styles from './styles.module.scss';
import RegisterForm from '@components/RegisterForm';
import Header from '@components/Header';
import { ReactNode } from 'react';
import BackgroundDecoration from '../../../public/background-decoration.svg';

interface IFormLayoutProps {
  children: ReactNode;
}

const FormLayout = ({ children }: IFormLayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main className={` ${styles.content}`}>
        <BackgroundDecoration className={styles.backgroundDecoration} />
        {children}
      </main>
    </>
  );
};

export default FormLayout;
