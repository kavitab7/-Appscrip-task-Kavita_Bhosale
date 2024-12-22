import styles from '../../styles/Product.module.css';
import { GoHeart } from "react-icons/go";
export default function Product({ product }) {
    return (
        <div className={styles.product}>
            <img src={product.image} alt={product.title} className={styles.image} />

            <div className={styles.details}>
                <p className={styles.title}>{product.title}</p>
                <p className={styles.pricing}>Sign in or Create an account to see pricing  <GoHeart className={styles.heartIcon} /> </p>
            </div>
        </div>
    );
}
