import { useEffect, useState } from 'react';

const useViewport = () => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const handelResize = () => setWindowSize(window.innerWidth);
  useEffect(() => {
    if (!windowSize) return;
    window.addEventListener('resize', handelResize);
    return () => window.removeEventListener('resize', handelResize);
  }, [windowSize]);

  return [windowSize];
};

export default useViewport;
