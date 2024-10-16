import '../styles/main.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
