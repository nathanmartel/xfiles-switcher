import React from 'react';
import { usePage, usePerPage, useResultsLength, useHandlePage } from '../../hooks/XFilesProvider/XFilesProvider';
import styles from './Pagination.css';

const Pagination = () => {
  
  const page = usePage();
  const perPage = usePerPage();
  const resultsLength = useResultsLength();
  const handlePage = useHandlePage();

  const totalPages = Math.ceil(resultsLength / perPage);

  return (
    <section className={styles.Pagination}>
      <button onClick={() => handlePage(-1)} disabled={ page <= 1 }>Prev</button>
      <span>{page} of {totalPages}</span>
      <button onClick={() => handlePage(1)} disabled={page >= totalPages}>Next</button>
    </section>
  );
};

export default Pagination;
