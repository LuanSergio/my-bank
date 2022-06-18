import styles from './styles.module.scss';
import Edit from '../../../public/edit.svg';
import IconButton from '@components/IconButton';

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
        <IconButton label="Edit" onClick={() => {}}>
          <Edit className={styles.editIcon} />
        </IconButton>
      </td>
    </tr>
  );
};

export default TableItem;
