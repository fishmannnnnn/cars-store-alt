import { useEffect } from 'react';
import ProductCard from './components/ui/ProductCard';
import SkeletonProductCard, { arr } from './components/ui/SkeletonProductCard';
import { useMemo, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import './App.css';
import axios from 'axios';
import { Car } from './components/ui/ProductCard';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Filter {
	minPrice: number;
	maxPrice: number;
}
interface Inputs {
	minPrice: number;
	maxPrice: number;
}

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [cars, setCars] = useState<Car[]>([]);
	const [filter, setFilter] = useState<Filter>({
		minPrice: 0,
		maxPrice: 100000000,
	});
	const { handleSubmit, control, register } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => {
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
				<form onSubmit={handleSubmit(onSubmit)} className='filter-form'>
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
				<div className='products'>
					{
					isLoading && filteredCars ? (
						arr.map((item, i) => (
							<div key={i} className='product'>
								<SkeletonProductCard />
							</div>
						))
					) : (
						filteredCars.map((item, i) => (
							<div key={i} className='product'>
								<ProductCard data={item} />
							</div>
						))
					)
					}
				</div>
			</div>
		</SkeletonTheme>
	);
}

export default App;
