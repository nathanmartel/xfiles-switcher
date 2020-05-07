import React from 'react';
import Header from '../Header/Header';
import Switcher from '../Switcher/Switcher';
import XFilesFolks from '../XFilesFolks/XFilesFolks';
import { XFilesProvider } from '../../hooks/XFilesProvider/XFilesProvider';

export default function App() {
  return (
    <XFilesProvider>
      <Header />
      <Switcher />
      <XFilesFolks />
    </XFilesProvider>
  );
}
