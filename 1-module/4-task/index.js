function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  if (lowerStr.includes("1xbet")) {
    return true;
  }
  if (lowerStr.includes("xxx")) {
    return true;
  }
  if (lowerStr.includes("innocent rabbit")) {
    return false;
  }
}
