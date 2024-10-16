import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Contact</h1>
      <p>
        Vous avez des questions ou souhaitez prendre rendez-vous ? Contactez-nous par téléphone ou via notre formulaire en ligne.
        Nos équipes sont à votre écoute pour répondre à toutes vos demandes.
      </p>
    </div>
  );
};

export default Contact;
