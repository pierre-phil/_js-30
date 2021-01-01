const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = [];

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

addItems.addEventListener("submit", addItem);
