import styles from './styles.module.scss';
import RegisterForm from '@components/RegisterForm';
import Header from '@components/Header';
import { ReactNode } from 'react';

interface IFormLayoutProps {
  children: ReactNode;
}

const FormLayout = ({ children }: IFormLayoutProps): JSX.Element => {
  return (
    <>
      <div className={styles.content}>
        <Header />
        <main className={`h-container`}>{children}</main>
      </div>
    </>
  );
};

export default FormLayout;
