import { useEffect } from 'react';
import ProductCard from './components/ui/ProductCard';
import { useMemo, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import './App.css';
import axios from 'axios';
import { Car } from './components/ui/ProductCard';

interface Filter {
	minPrice: number;
	maxPrice: number;
}
interface Inputs {
	minPrice: number;
	maxPrice: number;
}

function App() {
  const [cars, setCars] = useState([]);
  const [filter, setFilter] = useState<Filter>({
		minPrice: 0,
		maxPrice: 100000000,
  });
  const { handleSubmit, control, reset, register } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
		setFilter({ minPrice: data.minPrice, maxPrice: data.maxPrice });
		console.log(data);
  };

  const filteredCars = useMemo(
		() =>
			cars.filter(
				(item: Car) =>
					item.price < filter?.maxPrice &&
					item.price > filter?.minPrice
			),
		[filter]
  );

	useEffect(() => {

    const res = axios
		.get('/user')
		.then((res) => (res.data))
		.catch((e) => e);

    (async () => {
      const response = await res;
      console.log(response);
      setCars(response);
    })();
	}, []);
	return (
		<div className='flex gap-10'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col min-w-80'>
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
							className='h-8 w-[100%] bg-stone-100 text-black outline-none'
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
							className='h-8 w-[100%] bg-stone-100 text-black outline-none'
						/>
					)}
				/>
				<button type='submit' className='text-black'>
					Apply filter
				</button>
			</form>
			<div className='flex max-w-[1000px] w-[100%] flex-col p-10 bg-stone-100 text-slate-950'>
				{filteredCars.map((item, i) => (
					<div key={i} className='border-b border-stone-300'>
						<ProductCard data={item} />
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
