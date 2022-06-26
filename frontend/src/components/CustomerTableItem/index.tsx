import { Dispatch, SetStateAction, useState } from 'react';

import Edit from '../../../public/edit.svg';
import IconButton from '@components/IconButton';
import Modal from '@components/Modal';
import EditCustomerForm from '@components/EditCustomerForm';

import styles from './styles.module.scss';

interface ICustomerTableItemProps {
  customer: ICustomer;
  forceUpdate: Dispatch<SetStateAction<number>>;
}

const CustomerTableItem = ({
  customer,
  forceUpdate,
}: ICustomerTableItemProps): JSX.Element => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  function handleEditModalClose() {
    setIsEditOpen(false);
  }

  function handleEditModalOpen() {
    setIsEditOpen(true);
  }

  return (
    <>
      <tr className={styles.row}>
        <td className={styles.cell}>{customer.name}</td>
        <td className={styles.cell}>{customer.date}</td>
        <td className={styles.cell}>{customer.document}</td>
        <td className={styles.cell}>{customer.bank.bankName}</td>
        <td className={styles.cell}>{customer.bank.agency}</td>
        <td className={styles.cell}>
          {customer.bank.account}-{customer.bank.code}
        </td>
        <td className={styles.cell}>
          <IconButton label="Edit" onClick={handleEditModalOpen}>
            <Edit className={styles.editIcon} />
          </IconButton>
        </td>
      </tr>
      <Modal isOpen={isEditOpen} onClose={handleEditModalClose}>
        <EditCustomerForm forceUpdate={forceUpdate} customer={customer} />
      </Modal>
    </>
  );
};

export default CustomerTableItem;
