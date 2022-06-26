import styles from './styles.module.scss';

const CustomerTableItemSkeleton = (): JSX.Element => {
  return (
    <>
      <tr className={styles.row}>
        <td className={styles.cell}>
          <div className={styles.content} />
        </td>
        <td className={styles.cell}>
          <div className={styles.content} />
        </td>
        <td className={styles.cell}>
          <div className={styles.content} />
        </td>
        <td className={styles.cell}>
          <div className={styles.content} />
        </td>
        <td className={styles.cell}>
          <div className={styles.content} />
        </td>
        <td className={styles.cell}>
          <div className={styles.content} />
        </td>
        <td className={styles.cell}>
          <div className={styles.content} />
        </td>
      </tr>
    </>
  );
};

export default CustomerTableItemSkeleton;
