import React from 'react';
import { SideDrawer } from '@navigations/side-drawer';
import { usePersist } from 'hooks/app';

const App = () => {
  const { rehydrated } = usePersist();
  if (!rehydrated) return null;
  return <SideDrawer />;
};

export default App;
