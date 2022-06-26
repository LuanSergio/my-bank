import Arrow from '../../../public/arrow.svg';

import styles from './styles.module.scss';

interface ITablePaginationProps {
  currentPage: number;
  lastPage: number;
  handleNext: () => void;
  handlePrevious: () => void;
}

const TablePagination = ({
  currentPage,
  lastPage,
  handleNext,
  handlePrevious,
}: ITablePaginationProps): JSX.Element => {
  return (
    <div className={styles.pagination}>
      <p className={styles.paginationIndex}>
        {currentPage} - {lastPage}
      </p>
      <button
        disabled={currentPage <= 1}
        className={styles.paginationPrevious}
        onClick={handlePrevious}
        aria-label="Ir para página anterior"
      >
        <Arrow />
      </button>
      <button
        disabled={currentPage >= lastPage}
        className={styles.paginationNext}
        onClick={handleNext}
        aria-label="Ir para página seguinte"
      >
        <Arrow />
      </button>
    </div>
  );
};

export default TablePagination;
