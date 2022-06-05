const inputData = "1 и -5.8 или 10 хотя 34 + -5.3 и 73";

function getMinMax(str) {
  const string = str.split(" ");
  const stringNum = string
    .filter((value) => isFinite(value))
    .map((value) => parseFloat(value, 10));
  return {
    max: Math.max(...stringNum),
    min: Math.min(...stringNum),
  };
}
