// import axios from 'axios';
import { useState } from 'react';
import styles from './styles.module.scss';
import CustomerTableItem from '@components/CustomerTableItem';
import DotDecoration from '../../../public/dot-decoration.svg';
import Arrow from '../../../public/arrow.svg';
import useCustomers from './useCustomers';

const CustomerTable = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const { customers, lastPage } = useCustomers(currentPage);

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
    </>
  );
};

export default CustomerTable;
