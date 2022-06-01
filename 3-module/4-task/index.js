let user1 = {
  balance: "$1,825.65",
  picture: "https://placehold.it/32x32",
  age: 21,
  name: "Golden Branch",
  gender: "male",
  greeting: "Hello, Golden Branch! You have 7 unread messages.",
  favouriteFruit: "banana",
};

let user2 = {
  balance: "$1,490.15",
  picture: "https://placefield.it/32x32",
  age: 30,
  name: "Duncan Randall",
  gender: "male",
  greeting: "Hello, Duncan Randall! You have 15 unread messages.",
  favouriteFruit: "apple",
};

let user3 = {
  balance: "$1,664.27",
  picture: "https://placecity.it/32x32",
  age: 33,
  name: "Glass Ray",
  gender: "male",
  greeting: "Hello, Glass Ray! You have 15 unread messages.",
  favouriteFruit: "pear",
};

let user4 = {
  balance: "$1,072.95",
  picture: "https://placegarden.it/32x32",
  age: 36,
  name: "Helga Nixon",
  gender: "woman",
  greeting: "Hello, Helga Nixon! You have 15 unread messages.",
  favouriteFruit: "orange",
};

let users = [user1, user2, user3, user4];

function showSalary(users, age) {
  let newArray = [];
  users.forEach(function (item) {
    if (item.age <= age) {
      newArray.push(`${item.name}, ${item.balance}`);
    }
  });
  return newArray.join("\n");
}

let result = showSalary(users, 30);
