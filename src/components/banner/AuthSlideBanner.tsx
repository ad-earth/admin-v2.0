import { useEffect, useState } from 'react';
import styles from './authSlideBanner.module.scss';

const banners = [
  process.env.PUBLIC_URL + 'assets/slideBanner1.png',
  process.env.PUBLIC_URL + 'assets/slideBanner2.png',
  process.env.PUBLIC_URL + 'assets/slideBanner3.png',
];

export default function AuthSlideBanner() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleNext = () => setActiveIndex(prev => (prev + 1) % banners.length);

  const clickGoTo = (idx: number) => setActiveIndex(idx);
  const handleMouseEnter = () => setIsFocused(true);
  const handleMouseLeave = () => setIsFocused(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (!isFocused) intervalId = setInterval(handleNext, 2000);
    return () => clearInterval(intervalId);
  }, [isFocused]);

  return (
    <div
      className={styles.base}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.container}>
        <ul className={styles.carouselList}>
          {banners.map((url, idx) => (
            <li
              className={`
              ${styles.carouselListItem} 
              ${
                activeIndex === 0
                  ? `${styles.activeIndex0}`
                  : activeIndex === 1
                  ? `${styles.activeIndex1}`
                  : `${styles.activeIndex2}`
              }
              `}
              key={idx}
            >
              <img src={url} alt="banner" />
            </li>
          ))}
        </ul>
        <ul className={styles.nav}>
          {banners.map((_, idx) => (
            <li className={styles.navItem} key={idx}>
              <button
                className={`
                ${styles.navBtn} 
                ${activeIndex === idx && `${styles.activeNav}`}
                `}
                onClick={() => clickGoTo(idx)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
