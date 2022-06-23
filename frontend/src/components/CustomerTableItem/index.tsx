import { useState } from 'react';

import Edit from '../../../public/edit.svg';
import IconButton from '@components/IconButton';
import Modal from '@components/Modal';
import EditCustomerForm from '@components/EditCustomerForm';

import styles from './styles.module.scss';

interface ITableItemProps {
  customer: ICustomer;
}

const TableItem = ({ customer }: ITableItemProps): JSX.Element => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  function handleEditModalClose() {
    setIsEditOpen(false);
  }

  function handleEditModalOpen() {
    console.log('open');
    setIsEditOpen(true);
  }

  return (
    <>
      <tr className={styles.row}>
        <td className={styles.cell}>{customer.name}</td>
        <td className={styles.cell}>{customer.date}</td>
        <td className={styles.cell}>{customer.document}</td>
        <td className={styles.cell}>{customer.bank.agency}</td>
        <td className={styles.cell}>{customer.bank.account}</td>
        <td className={styles.cell}>
          <IconButton label="Edit" onClick={handleEditModalOpen}>
            <Edit className={styles.editIcon} />
          </IconButton>
        </td>
      </tr>
      <Modal isOpen={isEditOpen} onClose={handleEditModalClose}>
        <EditCustomerForm />
      </Modal>
    </>
  );
};

export default TableItem;
