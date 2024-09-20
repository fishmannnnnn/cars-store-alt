interface Props {
	data: Car;
}
export interface Car {
	image: string;
	model: string;
	price: number;
	characteristics?: object;
	package?: string;
}
const ProductCard = ({ data }: Props) => {
	return (
		<div className='product-card'>
			<div className='card-content'>
				<div className='card-image-container'>
					<img
						className='card-image'
						src={data.image}
						alt=''
					/>
				</div>
				<div className='h-5'>{data.model}</div>
				<div className='h-4 text-end'>{new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(+data.price)}</div>
			</div>
		</div>
	);
};
export default ProductCard;
