import Skeleton from 'react-loading-skeleton';
export const arr: number[] = [0,0,0,0,0,0,0,0,0,0];
const ProductCard = () => {
	return (
		<div className='product-card'>
			<div className='product-card__content'>
				<div className='product-card__image-container'>
					<Skeleton height={180} />
				</div>
				<div className='product-card__car-data'>
					<div className='product-card__car-data-model'>
						<Skeleton />
					</div>
					<div className='product-card__car-data-characteristics'>
						<div className='car-data-characteristics__characteritics-item'>
							<Skeleton count={4} />
						</div>
					</div>
				</div>
				<div className='product-card__price'>
					<Skeleton />
				</div>
			</div>
		</div>
	);
};
export default ProductCard;
