// src/components/Header.tsx
import styles from './Header.module.scss';
import Link from 'next/link'; // Utilisez Link si vous êtes sous Next.js

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logoTitle}>Bellagancia</h1>
        <p className={styles.logoSubtitle}>Make Up & Nails</p>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/soins">Soins</Link></li>
          <li><Link href="/reservations">Réservations</Link></li>
          <li><Link href="/cadeaux">Cadeaux</Link></li>
          <li><Link href="/mon-salon">Mon Salon</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
