import Skeleton from 'react-loading-skeleton';
import { useState } from 'react';
interface Props {
	data: Car;
}
export interface Car {
	image: string;
	model: string;
	price: number;
	characteristics?: any;
	package?: string;
}
const ProductCard = ({ data }: Props) => {
	const [isImageLoaded, setIsImageLoaded] = useState(false);
	return (
		<div className='product-card'>
			<div className='product-card__content'>
				<div className='product-card__image-container'>
					{!isImageLoaded && <Skeleton height={180} />}
					<img
						className='product-card__image'
						src={data.image}
						alt=''
						onLoad={() => setIsImageLoaded(true)}
					/>
				</div>
				<div className='product-card__car-data'>
					<div className='product-card__car-data-model'>
						{`${data.characteristics.year} BMW ${data.model}`}
					</div>
					<div className='product-card__car-data-characteristics'>
						<div className='car-data-characteristics__characteritics-item'>
							Body: <span>{data.characteristics.body}</span>
						</div>
						<div className='car-data-characteristics__characteritics-item'>
							Exterior Color:{' '}
							<span>{data.characteristics.exteriorColor}</span>
						</div>
						<div className='car-data-characteristics__characteritics-item'>
							Drive Line:{' '}
							<span>{data.characteristics.driveLine}</span>
						</div>
						<div className='car-data-characteristics__characteritics-item'>
							Fuel Type:{' '}
							<span>{data.characteristics.fuelType}</span>
						</div>
					</div>
				</div>
				<div className='product-card__price'>
					{new Intl.NumberFormat('de-DE', {
						style: 'currency',
						currency: 'EUR',
					}).format(+data.price)}
				</div>
			</div>
		</div>
	);
};
export default ProductCard;
