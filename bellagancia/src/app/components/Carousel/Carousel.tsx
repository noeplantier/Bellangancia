// src/components/Carousel.tsx
import styles from './Carousel.module.scss';

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <img src="/images/bellagancia-ban.avif" alt="bellagancia-ban" />
      <h1 className={styles.carouselTitle}>Bellagancia</h1>
      <a href="https://www.planity.com/bellagancia-33520-bruges" target="_blank" rel="noopener noreferrer" className={styles.reserveButton}>
        Réservez
      </a>
    </div>
  );
}

export default Carousel;
