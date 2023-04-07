export const useMinDate = () => {
  const now = new Date();
  let threeMonthAgo = new Date(now.setMonth(now.getMonth() - 3));
  return threeMonthAgo.toISOString().substring(0, 10);
};

export const useToday = () => {
  let now = new Date();
  return now.toISOString().substring(0, 10);
};
