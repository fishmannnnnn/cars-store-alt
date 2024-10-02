import { useEffect } from 'react';
import ProductCard, { Car } from '../ui/ProductCard';
import SkeletonProductCard, { arr } from '../ui/SkeletonProductCard';
import { useMemo, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import axios from 'axios';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Filter {
	minPrice: number;
	maxPrice: number;
}
const filterResetValue: Filter = {
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

	const uniqueCheckboxProps = useMemo(() => {
		const unique = {
			bodies: Array.from(
				new Set(cars.map((car) => car.characteristics.body))
			),
			colors: Array.from(
				new Set(cars.map((car) => car.characteristics.exteriorColor))
			),
			transmissions: Array.from(
				new Set(cars.map((car) => car.characteristics.transmission))
			),
			fuelTypes: Array.from(
				new Set(cars.map((car) => car.characteristics.fuelType))
			),
		};
		return unique;
	}, [cars]);

	useEffect(() => {
		axios
			.get('/cars')
			.then((res) => res.data)
			.then((data) => {
				setCars(data);
				setTimeout(() => {
					console.log(data);
					setIsLoading(false);
				}, 500);
				console.log(uniqueCheckboxProps);
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
						<p>Body type</p>
						{uniqueCheckboxProps.bodies.map((body, i) => (
							<div key={i}>
								<input type='checkbox' />
								<label>{body}</label>
							</div>
						))}
						<p>Exterior color</p>
						{uniqueCheckboxProps.colors.map((body, i) => (
							<div key={i}>
								<input type='checkbox' />
								<label>{body}</label>
							</div>
						))}
						<p>Transmission</p>
						{uniqueCheckboxProps.transmissions.map((body, i) => (
							<div key={i}>
								<input type='checkbox' />
								<label>{body}</label>
							</div>
						))}
						<p>Fuel type</p>
						{uniqueCheckboxProps.fuelTypes.map((body, i) => (
							<div key={i}>
								<input type='checkbox' />
								<label>{body}</label>
							</div>
						))}
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
						? arr.map((_: any, i: number) => (
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
