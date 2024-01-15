import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Under Construction" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        {/* Video Element */}
        <video
          controls
          autoPlay
          loop
          muted
          style={{ width: '100%', maxHeight: '360px' }}
        >
          <source src="/your-video-file.mp4" type="video/mp4" />
          Constructing in progress.
        </video>
      </main>

      <Footer />
    </div>
  );
}
