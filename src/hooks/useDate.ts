import useOffsetDate from './useOffsetDate';

const useDate = () => {
  const offsetDate = useOffsetDate();

  const minTime = () => {
    const minDate = new Date(offsetDate.setMonth(offsetDate.getMonth() - 1))
      .toISOString()
      .substring(0, 10);
    return minDate;
  };

  const nowTime = () => {
    const today = offsetDate.toISOString().substring(0, 10);
    return today;
  };

  return { minTime, nowTime };
};

export default useDate;
