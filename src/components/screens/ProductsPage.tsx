import { useEffect } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import SkeletonProductCard, { arr } from '@/components/ui/SkeletonProductCard';
import { useMemo, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import axios from 'axios';
import { Car } from '@/components/ui/ProductCard';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Filter {
	minPrice: number;
	maxPrice: number;
}
const filterResetValue = {
	minPrice: 0,
	maxPrice: 100000000,
};
function ProductsPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [cars, setCars] = useState<Car[]>([]);
	const [filter, setFilter] = useState<Filter>(filterResetValue);
	const { handleSubmit, control, register } = useForm<Filter>();
	const onSubmit: SubmitHandler<Filter> = (data) => {
		setFilter({ minPrice: data.minPrice, maxPrice: data.maxPrice });
		console.log(data);
	};

	const filteredCars = useMemo(
		() =>
			cars.filter(
				(item) =>
					item.price < filter?.maxPrice &&
					item.price > filter?.minPrice
			),
		[filter, cars]
	);
	const resetFilter = () => {
		setFilter(filterResetValue);
	};
	useEffect(() => {
		axios
			.get('https://www.everyapi.com/cars')
			.then((res) => res.data)
			.then((cars) => {
				setCars(cars);
				setTimeout(() => {
					console.log(cars);
					setIsLoading(false);
				}, 500);
			})
			.catch((e) => e);
	}, []);
	return (
		<SkeletonTheme>
			<div className='container'>
				<div className='filter-form'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<p>Price range</p>
						<div className='price-fields'>
							<Controller
								name='minPrice'
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<input
										{...field}
										{...register('minPrice', {
											pattern: /^[1-9][0-9]*$/,
										})}
										className='price-filter'
									/>
								)}
							/>
							-
							<Controller
								name='maxPrice'
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<input
										{...field}
										{...register('maxPrice', {
											pattern: /^[1-9][0-9]*$/,
										})}
										className='price-filter'
									/>
								)}
							/>
						</div>
						<button type='submit' className='apply-filter'>
							Apply filter
						</button>
					</form>

					<button
						className='apply-filter'
						onClick={() => resetFilter()}>
						Reset filter
					</button>
				</div>
				<div className='products'>
					{isLoading
						? arr.map((_, i) => (
								<div key={i} className='product'>
									<SkeletonProductCard />
								</div>
						  ))
						: filteredCars.map((item, i) => (
								<div key={i} className='product'>
									<ProductCard data={item} />
								</div>
						  ))}
				</div>
			</div>
		</SkeletonTheme>
	);
}

export default ProductsPage;
