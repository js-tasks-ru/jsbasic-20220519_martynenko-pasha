function camelize(str) {
  let isStr = str.split("-").map(function (item, index) {
    if (index !== 0) {
      return item[0].toUpperCase() + item.slice(1);
    }
    if (index == 0) {
      return item;
    }
  });
  return isStr.join("");
}
