import styles from './ProductsPage.module.scss';
import { useEffect } from 'react';
import ProductCard, { Car } from '../../ui/ProductCard/ProductCard';
import SkeletonProductCard from '../../ui/ProductCard/SkeletonProductCard';
import { useMemo, useState } from 'react';
import axios from 'axios';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Filter from '@/components/ui/Filter/Filter';

export interface IFilter {
    minPrice: number;
    maxPrice: number;
    bodies: string[];
    colors: string[];
    transmissions: string[];
    fuelTypes: string[];
}
const filterResetValue: IFilter = {
    minPrice: 0,
    maxPrice: 100000000,
    bodies: [],
    colors: [],
    transmissions: [],
    fuelTypes: [],
};

function ProductsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [cars, setCars] = useState<Car[]>([]);
    const [filter, setFilter] = useState<IFilter>(filterResetValue);

    const filteredCars = useMemo(
        () =>
            cars.filter(
                item =>
                    item.price < filter?.maxPrice &&
                    item.price > filter?.minPrice,
            ),
        [filter, cars],
    );

    const resetFilter = () => {
        setFilter(filterResetValue);
    };

    const uniqueCheckboxProps = useMemo(() => {
        const unique = {
            bodies: [...new Set(cars.map(car => car.characteristics.body))],
            colors: [
                ...new Set(cars.map(car => car.characteristics.exteriorColor)),
            ],
            transmissions: [
                ...new Set(cars.map(car => car.characteristics.transmission)),
            ],
            fuelTypes: [
                ...new Set(cars.map(car => car.characteristics.fuelType)),
            ],
        };
        return unique;
    }, [cars]);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:5000/api/cars')
            .then(res => res.data)
            .then(data => {
                setCars(data);
                setIsLoading(false);
                setTimeout(() => {
                    console.log(data);
                }, 500);
                console.log(uniqueCheckboxProps);
            })
            .catch(e => e);
    }, []);
    useEffect(() => {
        console.log(filter)
    }, [filter]);
    return (
        <SkeletonTheme>
            <div className={styles.container}>
                <Filter
                    uniqueCheckboxProps={uniqueCheckboxProps}
                    resetFilter={resetFilter}
                    setFilter={(filter) => setFilter(prev => ({...prev, filter}))}
                />
                <div className={styles.products}>
                    {isLoading
                        ? [...new Array(10).fill(0)].map((_: any, i: number) => (
                              <div key={i} className={styles.product}>
                                  <SkeletonProductCard />
                              </div>
                          ))
                        : filteredCars.map((item, i) => (
                              <div key={i} className={styles.product}>
                                  <ProductCard data={item} />
                              </div>
                          ))}
                </div>
            </div>
        </SkeletonTheme>
    );
}

export default ProductsPage;
