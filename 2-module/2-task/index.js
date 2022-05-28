function isEmpty(obj) {
  let counter = 0;
  for (let key in obj) {
    counter++;
  }
  if (counter == 0) {
    return true;
  } else {
    return false;
  }
}

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "подъём";

alert(isEmpty(schedule)); // false
