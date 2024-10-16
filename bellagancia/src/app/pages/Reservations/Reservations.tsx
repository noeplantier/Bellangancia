import styles from './Reservations.module.scss';

const Reservations = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Réservations</h1>
      <p>
        Réservez dès maintenant pour profiter de nos soins exclusifs et personnalisés. 
        Choisissez le créneau horaire qui vous convient et laissez nos experts prendre soin de vous.
      </p>
    </div>
  );
};

export default Reservations;
