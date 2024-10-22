import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Cervecería Artesanal</title>
        <meta name="description" content="La mejor cervecería artesanal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-4">
        <ProductList />
        <ProductList />
        <ProductList />

      </main>

      <Footer />
    </div>
  );
};

export default Home;
