import styles from './ProductCard.module.scss';
import Skeleton from 'react-loading-skeleton';
export const arr: number[] = [0,0,0,0,0,0,0,0,0,0];
const ProductCard = () => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.card}>
				<div className={styles.imageContainer}>
					<Skeleton height={180} />
				</div>
				<div>
					<div className={styles.itemModel}>
						<Skeleton />
					</div>
					<div className={styles.itemCharacteristics}>
						<div className={styles.characteristicsField}>
							<Skeleton count={4} />
						</div>
					</div>
				</div>
				<div className={styles.itemPrice}>
					<Skeleton />
				</div>
			</div>
		</div>
	);
};
export default ProductCard;
