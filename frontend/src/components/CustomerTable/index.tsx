import { useState } from 'react';

import CustomerTableItem from '@components/CustomerTableItem';
import TablePagination from '@components/TablePagination';
import DotDecoration from '../../../public/dot-decoration.svg';
import Arrow from '../../../public/arrow.svg';
import useCustomers from './useCustomers';

import styles from './styles.module.scss';

const CustomerTable = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [forceUpdate, setForceUpdate] = useState(0);

  const { customers, lastPage } = useCustomers(currentPage, forceUpdate);

  function handlePreviousClick() {
    console.log('previous');
    if (currentPage > 1) {
      setCurrentPage(previousValue => previousValue - 1);
    }
  }

  function handleNextClick() {
    if (currentPage < lastPage) {
      console.log('next');
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
                <th className={styles.tableHead}>Banco</th>
                <th className={styles.tableHead}>Agência</th>
                <th className={styles.tableHead}>Conta</th>
                <th className={styles.tableHead}>Editar</th>
              </tr>

              {customers.map(customer => (
                <CustomerTableItem
                  key={customer.id}
                  forceUpdate={setForceUpdate}
                  customer={customer}
                />
              ))}
            </tbody>
          </table>
        </div>
        <TablePagination
          currentPage={currentPage}
          handleNext={handleNextClick}
          handlePrevious={handlePreviousClick}
          lastPage={lastPage}
        />
        <DotDecoration className={styles.decoration} aria-hidden="true" />
      </div>
    </>
  );
};

export default CustomerTable;
