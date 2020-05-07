import React from 'react';
import { usePage, usePerPage, useResultsLength, useHandlePage } from '../../hooks/XFilesProvider/XFilesProvider';

const Pagination = () => {
  
  const page = usePage();
  const perPage = usePerPage();
  const resultsLength = useResultsLength();
  const handlePage = useHandlePage();

  // Hmm, too bad API doesn't return a results length...
  const totalPages = Math.ceil(resultsLength / perPage);

  return (
    <>
      <button onClick={() => handlePage(-1)} disabled={ page <= 1 }>Prev</button>
      <span>{page}</span>
      {/* // Hmm, too bad API doesn't return a results length */}
      {/* <span>{page} of {totalPages}</span> */}
      <button onClick={() => handlePage(1)} disabled={resultsLength < perPage}>Next</button>
    </>
  );
};

export default Pagination;
