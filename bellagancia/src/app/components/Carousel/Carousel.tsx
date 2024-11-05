// src/components/Carousel.tsx
import HeroSection from '../HeroSection/HeroSection';
import styles from './Carousel.module.scss';

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <img src="/images/bellagancia-ban.avif" alt="bellagancia-ban" />
      <a href="https://www.planity.com/bellagancia-33520-bruges" target="_blank" rel="noopener noreferrer" className={styles.reserveButton}>
        Réservez
      </a>
    </div>

  );   
}
export default Carousel;
