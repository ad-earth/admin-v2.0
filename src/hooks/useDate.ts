const useDate = () => {
  const date = new Date();
  const offset = date.getTimezoneOffset() * 60000;
  const dateOffset = new Date(date.getTime() - offset);

  const minTime = () => {
    const minDate = new Date(dateOffset.setMonth(dateOffset.getMonth() - 1))
      .toISOString()
      .substring(0, 10);
    return minDate;
  };

  const nowTime = () => {
    const today = dateOffset.toISOString().substring(0, 10);
    return today;
  };

  return { minTime, nowTime };
};

export default useDate;
