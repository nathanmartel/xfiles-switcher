import React from 'react';
import Switcher from '../Switcher/Switcher';
import { useCategory, useSwitch } from '../../hooks/XFilesProvider/XFilesProvider';
import styles from './Header.css';

const Header = () => {

  const category = useCategory();
  const onSwitcherChange = useSwitch();

  return (
    <header className={styles.Header}>
      <h1>X-Files • Main or Monster</h1>
      <Switcher value={category === 'Monster_of_the_Week'} onSwitcherChange={onSwitcherChange} />
    </header>
  );
};

export default Header;
