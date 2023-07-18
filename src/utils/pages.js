export const getPagesCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalPages) => {
  const resultArray = [];

  for (let i = 0; i < totalPages; i++) {
    resultArray.push(i + 1);
  }
  return resultArray;
};
