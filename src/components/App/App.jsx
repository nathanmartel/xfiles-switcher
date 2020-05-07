import React from 'react';
import Header from '../Header/Header';
import XFilesFolks from '../XFilesFolks/XFilesFolks';
import { XFilesProvider } from '../../hooks/XFilesProvider/XFilesProvider';

export default function App() {
  return (
    <XFilesProvider>
      <Header />
      <XFilesFolks />
    </XFilesProvider>
  );
}
