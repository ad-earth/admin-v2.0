const useMinDate = () => {
  const now = new Date();
  const threeMonthAgo = new Date(now.setMonth(now.getMonth() - 3));
  return threeMonthAgo.toISOString().substring(0, 10);
};

export default useMinDate;
