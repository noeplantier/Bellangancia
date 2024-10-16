// src/pages/index.tsx
import Header from '../app/components/Header/Header';
import Footer from '../app/components/Footer/Footer';
import Carousel from '../app/components/Carousel/Carousel';
import ProductCard from '../app/components/ProductCard/ProductCard';
import  styles from "./page.module.scss";

function Home () {
  return (
    <div className={styles.home}>
      <Header />
      <Carousel />
      <section className={styles.products}>
      <h1>SALON BELLAGANCIA A BRUGES </h1>

        <ProductCard title="Product 1" image="/images/bellagancia1.webp" />
        <ProductCard title="Product 2" image="/images/bellagancia2.webp" />
        <ProductCard title="Product 3" image="/images/bellagancia3.jpeg" />
        <ProductCard title="Product 4" image="/images/bellagancia4.jpeg" />
        <ProductCard title="Product 5" image="/images/bellagancia5.jpeg" />

      </section>
      <Footer />
    </div>
  );
}

export default Home;
