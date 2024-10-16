import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="logo-container">
  <h1 className="logo-title">Bellagancia</h1>
  <p className="logo-subtitle">Make Up & Nails</p>
</div>

      <nav className={styles.nav}>
        <ul>
          <li><Link href="/soins">Soins</Link></li>
          <li><Link href="/reservations">Réservations</Link></li>
          <li><Link href="/cadeaux">Cadeaux</Link></li>
          <li><Link href="/salon">Mon Salon</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
