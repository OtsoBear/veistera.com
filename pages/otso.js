// pages/otso.js
import Head from 'next/head';
import Header from '@components/header';
import Footer from '@components/Footer';

const otso = () => {
  return (
    <div className="container">
      <Head>
        <title>Veistera.com - Page 2</title>
        {/* Additional meta tags, link tags, etc., can be added here */}
      </Head>

      <main>
        <Header title="Veistera.com - Page 2" />
        <p className="description">
          {/* Your page content goes here */}
          <code>Page 2 content</code>
        </p>

        {/* Additional content for Page 2 goes here */}
      </main>

      <Footer />
    </div>
  );
};

export default otso;
