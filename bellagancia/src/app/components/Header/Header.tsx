// src/components/Header.tsx
import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logoTitle}>Bellagancia</h1>
        <p className={styles.logoSubtitle}>Make Up & Nails</p>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link legacyBehavior href="/#soins"><a>Soins</a></Link></li>
          <li><Link legacyBehavior href="/#reservations"><a>Réservations</a></Link></li>
          <li><Link legacyBehavior href="/#cadeaux"><a>Cadeaux</a></Link></li>
          <li><Link legacyBehavior href="/#mon-salon"><a>Mon Salon</a></Link></li>
          <li><Link legacyBehavior href="/#contact"><a>Contact</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
