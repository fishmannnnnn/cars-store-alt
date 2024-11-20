import styles from './Filter.module.scss';
import CheckboxInput from '../CheckboxInput/CheckboxInput';

interface UniqueCheckboxProps {
    [key: string]: string[];
}
interface Props {
    uniqueCheckboxProps: UniqueCheckboxProps;
    resetFilter: () => void;
    setFilter: Function;
}
const Filter = ({ uniqueCheckboxProps, resetFilter, setFilter }: Props) => {
    return (
        <div className={styles.filterContainer}>
            <form className={styles.form}>
                <p>Price range</p>
                <div className={styles.price}></div>
                <p>Body type</p>
                {uniqueCheckboxProps.bodies.map((item, i) => (
                    <div key={i}>
                        <CheckboxInput id={`body${i}`}>{item}</CheckboxInput>
                    </div>
                ))}
                <p>Exterior color</p>
                {uniqueCheckboxProps.colors.map((item, i) => (
                    <div key={i}>
                        <CheckboxInput id={`color${i}`}>{item}</CheckboxInput>
                    </div>
                ))}
                <p>Transmission</p>
                {uniqueCheckboxProps.transmissions.map((item, i) => (
                    <div key={i}>
                        <CheckboxInput id={`transmission${i}`}>
                            {item}
                        </CheckboxInput>
                    </div>
                ))}
                <p>Fuel type</p>
                {uniqueCheckboxProps.fuelTypes.map((item, i) => (
                    <div key={i}>
                        <CheckboxInput id={`fuel${i}`}>{item}</CheckboxInput>
                    </div>
                ))}
                <button type="submit" className={styles.filterBtn}>
                    Apply filter
                </button>
            </form>

            <button className={styles.filterBtn} onClick={() => resetFilter()}>
                Reset filter
                {}
            </button>
        </div>
    );
};
export default Filter;
