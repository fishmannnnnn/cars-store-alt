import { CheckIcon } from '@radix-ui/react-icons';
import * as Checkbox from '@radix-ui/react-checkbox';
import { useState } from 'react';
import styles from './CheckboxInput.module.scss';

const CheckboxInput = ({ children, id }: { children?: React.ReactNode, id: string }) => {
	const [checked, setChecked] = useState(false);
	return (
		<div className={styles.container}>
			<Checkbox.Root
				className={styles.Root}
				id={id}
				value={checked}
				onCheckedChange={()=>setChecked(!checked)}>
				<Checkbox.Indicator className={styles.Indicator}>
					<CheckIcon />
				</Checkbox.Indicator>
			</Checkbox.Root>
			<label className={styles.Label} htmlFor={id}>
				{children}
			</label>
		</div>
	);
};
export default CheckboxInput;
