import React from 'react';
import Navbar from '../components/Navbar';

type Props = {
  children: JSX.Element;
  component: JSX.Element;
};

const MainLayout: React.FC<Props> = ({ children, component }) => {
  return (
    <>
      <Navbar component={component} />
      {children}
    </>
  );
};

export default MainLayout;
