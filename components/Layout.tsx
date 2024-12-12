import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Provider } from '@/components/ui/provider';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <Provider>{children}</Provider>
);

export default Layout;
