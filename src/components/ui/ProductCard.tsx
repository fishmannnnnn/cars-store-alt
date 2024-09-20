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
		<div className='p-4'>
			<div className='grid grid-cols-[1.5fr,3fr,1fr] gap-6'>
				<div className='max-w-[260px]'>
					<img
						className='rounded '
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
