import styles from './styles.module.scss';
import Edit from '../../../public/edit.svg';
import Logo from '../../../public/logo.svg';

interface ITableItemProps {
  customer: ICustomer;
}

const TableItem = ({ customer }: ITableItemProps): JSX.Element => {
  return (
    <tr className={styles.row}>
      <td className={styles.cell}>{customer.name}</td>
      <td className={styles.cell}>{customer.date}</td>
      <td className={styles.cell}>{customer.document}</td>
      <td className={styles.cell}>{customer.bank.agency}</td>
      <td className={styles.cell}>{customer.bank.account}</td>
      <td className={styles.cell}>
        <button aria-label="Edit" className={styles.editButton}>
          <Edit className={styles.editIcon} />
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
