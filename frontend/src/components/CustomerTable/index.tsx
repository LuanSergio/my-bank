import { ChangeEvent, useState } from 'react';

import CustomerTableItem from '@components/CustomerTableItem';
import DotDecoration from '../../../public/dot-decoration.svg';
import Arrow from '../../../public/arrow.svg';
import useCustomers from './useCustomers';
import Modal from '@components/Modal';
import Button from '@components/Button';
import Input from '@components/Input';

import styles from './styles.module.scss';

const CustomerTable = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const { customers, lastPage } = useCustomers(currentPage);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleModalClose() {
    setIsOpen(false);
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handlePreviousClick() {
    if (currentPage > 1) {
      setCurrentPage(previousValue => previousValue - 1);
    }
  }

  function handleNextClick() {
    if (currentPage < lastPage) {
      setCurrentPage(previousValue => previousValue + 1);
    }
  }

  return (
    <>
      <h1 className={styles.title}>Lista de clientes</h1>
      <div className={styles.content}>
        <DotDecoration className={styles.decoration} aria-hidden="true" />
        <div className={styles.tableContainer}>
          <table className={styles.table} cellSpacing="0">
            <tbody>
              <tr>
                <th className={styles.tableHead}>Nome</th>
                <th className={styles.tableHead}>Data</th>
                <th className={styles.tableHead}>Documento</th>
                <th className={styles.tableHead}>Agência</th>
                <th className={styles.tableHead}>Conta</th>
                <th className={styles.tableHead}>Edit</th>
              </tr>

              {customers.map(customer => (
                <CustomerTableItem key={customer.id} customer={customer} />
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.tableFooter}>
          <p className={styles.paginationIndex}>
            {currentPage} - {lastPage}
          </p>
          <button
            disabled={currentPage <= 1}
            className={styles.paginationPrevious}
            onClick={handlePreviousClick}
          >
            <Arrow />
          </button>
          <button
            disabled={currentPage >= lastPage}
            className={styles.paginationNext}
            onClick={handleNextClick}
          >
            <Arrow />
          </button>
        </div>
        <DotDecoration className={styles.decoration} aria-hidden="true" />
      </div>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
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
      </Modal>
    </>
  );
};

export default CustomerTable;
