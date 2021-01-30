const CATS = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1

const CAT = {
  complain: function () {
    return console.log("Meow!");
  },
};
CAT.complain();

// Question 2
const HEADING = document.querySelector("h3");
HEADING.innerHTML = "Updated heading";

// Question 3
HEADING.style.fontSize = "2em";

// Question 4
HEADING.classList.add("subheading");

// Question 5
const PARAGRAPHS = document.querySelectorAll("p");
for (let paragraph of PARAGRAPHS) {
  paragraph.style.color = "red";
}

// Question 6
// Task says to name it with camelcase.. but our teacher told us constants should be in uppercase.
// I'm sure neither is wrong :)
// One should be able to tell which values are 'immutable' at a glance.
const RESULTSCONTAINER = document.querySelector("div.results");
RESULTSCONTAINER.innerHTML = "<p>New Paragraph</p>";
RESULTSCONTAINER.style.backgroundColor = "yellow";

// Question 7
function logList(list) {
  for (let item of list) {
    console.log(item.name);
  }
}
logList(CATS);

// Question 8
function createCats(cats) {
  let newHtml = "";
  for (let cat of cats) {
    newHtml += "<div>";
    newHtml += `<h5>${cat.name}</h5>`;
    if (cat.age) {
      newHtml += `<p>${cat.age}</p>`;
    } else {
      newHtml += `<p>Age unknown</p>`;
    }
    newHtml += "</div>";
  }
  return newHtml;
}

const CATCONTAINER = document.querySelector(".cat-container");
CATCONTAINER.innerHTML = createCats(CATS);
