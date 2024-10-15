// src/components/ProductCard.tsx
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  title: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image }) => {
  return (
    <div className={styles.productCard}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default ProductCard;
