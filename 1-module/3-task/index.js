function ucFirst(str) {
  if (str === "") {
    return "";
  }
  return str[0].toUpperCase() + str.slice(1);
}

ucFirst("вася") === "Вася";
ucFirst("") === "";
ucFirst("в") === "В";
