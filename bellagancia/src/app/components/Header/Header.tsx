// src/components/Header.tsx
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logoTitle}>Bellagancia</h1>
        <p className={styles.logoSubtitle}>Make Up & Nails</p>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#soins">Soins</a></li>
          <li><a href="#reservations">Réservations</a></li>
          <li><a href="#cadeaux">Cadeaux</a></li>
          <li><a href="#mon-salon">Mon Salon</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
