import Head from 'next/head';
import Header from '@components/header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Veistera.com</title>
        <link rel="icon" href="public\favicon.ico" />
      </Head>

      <main>
        <Header title="Veistera.com" />
        <p className="description">
        <code>Under construction</code>
        </p>

        {/* Video Element */}
        <video
          autoPlay
          loop
          muted
          style={{ width: '100%', maxHeight: '360px' }}
        >
          <source src="/video.mp4" type="video/mp4" />
          Construction is in progress.
        </video>
      </main>
    <Footer />
    </div>
  );
}
