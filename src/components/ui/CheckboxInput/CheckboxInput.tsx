import { CheckIcon } from '@radix-ui/react-icons';
import * as Checkbox from '@radix-ui/react-checkbox';
import styles from './CheckboxInput.module.scss';
import { useEffect, useMemo, useState } from 'react';

const CheckboxInput = ({
    children,
    id,
    onChange
}: {
    children?: React.ReactNode;
    id: string;
    onChange?: (arg: boolean) => void;
}) => {
    const [checked, setChecked] = useState(false);

    useMemo(() => onChange && onChange(checked), [checked]);
    
    return (
        <div className={styles.container}>
            <Checkbox.Root
                className={styles.Root}
                id={id}
                checked={checked}
                onCheckedChange={() => setChecked(!checked)}
            >
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
