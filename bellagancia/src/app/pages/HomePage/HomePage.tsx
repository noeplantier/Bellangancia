// src/pages/index.tsx
import Header from '../../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Carousel from '../components/Carousel/Carousel';
import ProductCard from '../components/ProductCard/ProductCard';
import styles from '../styles/pages/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Carousel />
      <section className={styles.products}>
        <ProductCard title="Product 1" image="/images/product1.png" />
        <ProductCard title="Product 2" image="/images/product2.png" />
        <ProductCard title="Product 3" image="/images/product3.png" />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
