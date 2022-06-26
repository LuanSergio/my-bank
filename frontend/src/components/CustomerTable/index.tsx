import { useState } from 'react';

import Arrow from '../../../public/arrow.svg';
import DotDecoration from '../../../public/dot-decoration.svg';

import CustomerTableItem from '@components/CustomerTableItem';
import TablePagination from '@components/TablePagination';
import useCustomers from './useCustomers';
import CustomerTableItemSkeleton from '@components/CustomerTableItemSkeleton';

import styles from './styles.module.scss';

const CustomerTable = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [forceUpdate, setForceUpdate] = useState(0);

  const { customers, lastPage } = useCustomers(currentPage, forceUpdate);

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
                <th className={styles.tableHead}>Banco</th>
                <th className={styles.tableHead}>Agência</th>
                <th className={styles.tableHead}>Conta</th>
                <th className={styles.tableHead}>Código</th>
                <th className={styles.tableHead}>Editar</th>
              </tr>

              {customers.length > 0 ? (
                customers.map(customer => (
                  <CustomerTableItem
                    key={customer.id}
                    forceUpdate={setForceUpdate}
                    customer={customer}
                  />
                ))
              ) : (
                <>
                  {Array.from(Array(10), (e, i) => (
                    <CustomerTableItemSkeleton key={i} />
                  ))}
                </>
              )}
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
