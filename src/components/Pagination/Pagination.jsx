import React from 'react';
import { usePage, useHandlePage } from '../../hooks/XFilesProvider/XFilesProvider';

const Pagination = () => {
  
  const page = usePage();
  const handlePage = useHandlePage();

  return (
    <>
      <button onClick={() => handlePage(-1)} disabled={ page <= 1 }>Prev</button>
      <span>{page}</span>
      <button onClick={() => handlePage(1)}>Next</button>
    </>
  );
};

export default Pagination;
