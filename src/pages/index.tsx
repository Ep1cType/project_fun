import styles from '@/styles/Home.module.css';
import React, { ReactElement } from 'react';
import Layout from '@/src/app/layout';
import { NextPageWithLayout } from './_app';
import MainHeader from '@/src/widgets/main-header';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <MainHeader />
      Hello
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
