import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logoTitle}>Bellagancia</h1>
        <h2 className={styles.logoSubtitle}>Make Up & Nails</h2>
      </div>
        <p><strong>Adresse :</strong> All. Joachim du Bellay, 33520 Bruges</p>
        <p><strong>Téléphone :</strong> 07 68 84 21 26</p>
        <p><strong>Horaires :</strong> </p>
         <p>lundi 09:00 AM - 07:00 PM</p>
        <p>mardi 09:00 AM - 07:00 PM</p>
        <p>mercredi 09:00 AM - 07:00 PM</p>
        <p>jeudi 09:00 AM - 07:00 PM</p>
        <p>vendredi 09:00 AM - 07:00 PM</p>
        <p>samedi 09:00 AM - 07:00 PM</p>
        <p>dimanche : Fermé</p>
       
        
      </div>
    </footer>
  );
};

export default Footer;
