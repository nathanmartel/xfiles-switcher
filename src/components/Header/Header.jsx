import React from 'react';
import Switcher from '../Switcher/Switcher';
import { useCategory, useSwitch } from '../../hooks/XFilesProvider/XFilesProvider';

const Header = () => {

  const category = useCategory();
  const onSwitcherChange = useSwitch();

  return (
    <header>
      <h1>X-Files • Main or Monster?</h1>
      <Switcher value={category === 'Monster_of_the_Week'} onSwitcherChange={onSwitcherChange} />
    </header>
  );
};

export default Header;
