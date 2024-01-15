import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Veistera.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
        <code>Under construction</code>
        </p>

        {/* Video Element */}
        <video
          controls
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
