import styles from './ProductCard.module.scss';
import Skeleton from 'react-loading-skeleton';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
interface Props {
    data: Car;
}
export interface Car {
    image: string;
    model: string;
    price: number;
    characteristics?: any;
    package?: string;
}
const ProductCard = ({ data }: Props) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const imgRef = useRef<HTMLDivElement | null>(null);
    const notLoadedRef = useRef<HTMLDivElement | null>(null);
    
    const [showPlaceholder, setShowPlaceholder] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isImageLoaded) {
                setShowPlaceholder(true);
            }
        }, 5000);

        return () => clearTimeout(timeout);
    }, [isImageLoaded]);

    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                {showPlaceholder && !isImageLoaded ? (
                    <div
                        className={clsx(
                            styles.imageContainer,
                            styles.imageNotLoaded,
                        )}>
                        Image not loaded :(
                    </div>
                ) : (
                    <div className={styles.imageContainer}>
                        {!isImageLoaded && <Skeleton height={180} />}
                        <img
                            className={styles.image}
                            src={data.image}
                            alt=""
                            onLoad={() => setIsImageLoaded(true)}
                        />
                    </div>
                )}
                <div>
                    <div className={styles.itemModel}>
                        {`${data.characteristics.year} BMW ${data.model}`}
                    </div>
                    <div className={styles.itemCharacteristics}>
                        <div className={styles.characteristicsField}>
                            Body: <span>{data.characteristics.body}</span>
                        </div>
                        <div className={styles.characteristicsField}>
                            Exterior Color:{' '}
                            <span>{data.characteristics.exteriorColor}</span>
                        </div>
                        <div className={styles.characteristicsField}>
                            Transmission:{' '}
                            <span>{data.characteristics.transmission}</span>
                        </div>
                        <div className={styles.characteristicsField}>
                            Fuel Type:{' '}
                            <span>{data.characteristics.fuelType}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.itemPrice}>
                    {new Intl.NumberFormat('de-DE', {
                        style: 'currency',
                        currency: 'EUR',
                    }).format(+data.price)}
                </div>
            </div>
        </div>
    );
};
export default ProductCard;
