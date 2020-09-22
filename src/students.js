// const fs = require("fs");
// let data = fs.readFileSync("userData.json");

// const paresdData = JSON.parse(data);
// const names = paresdData.users.map(user => {
//   const name = user.name;
//   return name.first;
// });
// console.log(names);

document.getElementById("submit").addEventListener("click", () => {
  const names = document.getElementById("name").value.split(",");
  getpair(names);
});

const getpair = names => {
  if (names.length % 2 != 0) {
    alert(
      "You must have an even number of names. You currently have " +
        names.length +
        " names."
    );
  } else {
    var arr1 = names.slice(0, names.length / 2), // copy array
      arr2 = names.slice(names.length / 2, names.length); // copy array again

    arr1.sort(function() {
      return 0.5 - Math.random();
    }); // shuffle arrays
    arr2.sort(function() {
      return 0.5 - Math.random();
    });

    // creating an empty array to save the pairs in it
    const pairs = [];

    while (arr1.length) {
      var name1 = arr1.pop(), // get the last value of arr1
        name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
      //        ^^ if the first value is the same as name1,
      //           get the last value, otherwise get the first

      pairs.push(`${capitalize(name1)} gets ${capitalize(name2)}`); //  updating the pairs array with each pair by using push, here i am using a function capitalize to captalize each name, the function is at the bottom of this file
    }

    console.log(pairs);

    // creating a variable to catch the empty place in html using id-pairs
    const display = document.getElementById("pairs");

    //  setting a variable to create an empty element in html, mapping the whole pairs array, and setting each pair as an inner text value of each element
    pairs.map(pair => {
      const element = document.createElement("div");
      element.innerText = pair;
      // <div>pair</div>

      // at last appendchild(element) is giving us every pair in the div of html by adding the pairs in display varable
      display.appendChild(element);
    });
  }
};

const capitalize = word => {
  return (
    word
      .trim()
      .charAt(0)
      .toUpperCase() + word.trim().slice(1)
  );
};
