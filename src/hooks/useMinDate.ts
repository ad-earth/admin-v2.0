const useMinDate = () => {
  const now = new Date();
  return new Date(now.setMonth(now.getMonth() - 1))
    .toISOString()
    .substring(0, 10);
};

export default useMinDate;
