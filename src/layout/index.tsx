import React, { FC } from 'react';
import Header from './header';

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <div className="main">{children}</div>
  </>
);

export default Layout;
