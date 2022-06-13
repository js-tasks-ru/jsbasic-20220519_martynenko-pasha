function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.substring(str, maxlength - 1) + "…";
  }
  if (str.length < maxlength) {
    return str.substring(str, maxlength);
  }
}
