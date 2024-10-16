import styles from './Salon.module.scss';

const Salon = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Mon Salon</h1>
      <p>
        Découvrez notre espace dédié à la beauté et au bien-être. Un lieu chaleureux et apaisant où
        nos experts prennent soin de vous avec passion et professionnalisme.
      </p>
    </div>
  );
};

export default Salon;
