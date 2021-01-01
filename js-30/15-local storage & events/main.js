const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  console.log("item added");
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  console.log("item :", item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  console.log("items :", items);
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((el, index) => {
      return `
    <li>
    <input type='checkbox' data-index=${index} id="item${index}" ${
        el.done ? "checked" : ""
      }/>
      <label for="item${index}">${el.text}</label>
    </li>`;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  // skip the rest of the function if what we clicked is not an input
  console.log(e.target);
  const el = e.target;
  const index = el.dataset.index;
  console.log("index :", index);
  // these are the indexs that we defined in populateList map
  items[index].done = !items[index].done;
  // then if 'done' value for an element index is false, put it to true and vice-versa
  // then update localStorage
  localStorage.setItem("items", JSON.stringify(items));
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

populateList(items, itemsList);
