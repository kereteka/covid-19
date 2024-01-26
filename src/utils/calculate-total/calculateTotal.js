export const calculateTotal = (dataArray, propertyName) => {
  return dataArray.reduce((total, item) => {
    if (item.hasOwnProperty(propertyName)) {
      total += item[propertyName];
    }
    return total;
  }, 0);
};

export default calculateTotal