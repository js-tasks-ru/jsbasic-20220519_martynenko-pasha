function showSalary(users, age) {
  let newArray = [];
  users.forEach(function (item) {
    if (item.age <= age) {
      newArray.push(`${item.name}, ${item.balance}`);
    }
  });
  return newArray.join("\n");
}
