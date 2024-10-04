import styles from './Filter.module.scss';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

interface UniqueCheckboxProps {
    [key: string]: string[];
}
interface Props {
	uniqueCheckboxProps: UniqueCheckboxProps;
    resetFilter: Function;
}
const Filter = ({ uniqueCheckboxProps, resetFilter }: Props) => {
	// const { handleSubmit, control, register } = useForm<Filter>();
	// const onSubmit: SubmitHandler<Filter> = (data) => {
	// 	setFilter({ minPrice: data.minPrice, maxPrice: data.maxPrice });
	// 	console.log(data);
	// };
	return (
		<div className={styles.filterContainer}>
			<form className={styles.form}
			// onSubmit={ handleSubmit(onSubmit)}
			>
				<p>Price range</p>
				<div className={styles.price}>
					{/* <Controller
						name='minPrice'
						// control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<input
								{...field}
								// {...register('minPrice', {
								// 	pattern: /^[1-9][0-9]*$/,
								// })}
								className='price-filter'
							/>
						)}
					/>
					-
					<Controller
						name='maxPrice'
						// control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<input
								{...field}
								// {...register('maxPrice', {
								// 	pattern: /^[1-9][0-9]*$/,
								// })}
								className='price-filter'
							/>
						)}
					/> */}
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
				<button type='submit' className={styles.filterBtn}>
					Apply filter
				</button>
			</form>

			<button className={styles.filterBtn} onClick={() => resetFilter()}>
				Reset filter
			</button>
		</div>
	);
};
export default Filter;
