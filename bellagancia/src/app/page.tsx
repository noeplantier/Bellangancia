"use client"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import ProductCard from './components/ProductCard/ProductCard';
import styles from "./page.module.scss";
import About from './pages/About/About';
import Soins from './pages/Soins/Soins';
import Reservations from './pages/Reservations/Reservations';
import Salon from './pages/Salon/Salon';
import Contact from './pages/Contact/Contact';
import Cadeaux from './pages/Cadeaux/Cadeaux';


function Home () {
  return (
    <div className={styles.home}>
      <Header />
      <Carousel />
      <About />
      <section id="soins" className={styles.products}>
        <ProductCard title="Product 1" image="/images/bellagancia1.webp" />
        <ProductCard title="Product 2" image="/images/bellagancia2.webp" />
        <ProductCard title="Product 3" image="/images/bellagancia3.jpeg" />
        <ProductCard title="Product 4" image="/images/bellagancia4.jpeg" />
        <ProductCard title="Product 5" image="/images/bellagancia5.jpeg" />
      </section>
      <section id="soins">
        <Soins />
      </section>
      <section id="reservations">
        <Reservations />
      </section>
      <section id="cadeaux">
        <Cadeaux />
      </section>
      <section id="mon-salon">
        <Salon />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
