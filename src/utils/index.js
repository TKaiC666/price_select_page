export const addComma = (num) => {
  const ADD_COMMA_PATTERN = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(ADD_COMMA_PATTERN, (match) => {
    return match + ",";
  });
};
