import Skeleton from "react-loading-skeleton";
import { useState } from "react";
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
const ProductCard = (
	{ data }: Props
) => {
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
				<div className='product-card__model'>
					{`${data.characteristics.year} BMW ${data.model}`}
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
