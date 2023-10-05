let form = document.forms.pers_data;
let changeForm = document.forms.changeTodo;
let inp_name = form.querySelector("[data-name]");
let inp_age = form.querySelector("[data-age]");
let btn = document.querySelector("button");
let pers_data = document.querySelector("form");
// let table1 = document.querySelector("table");
let table = document.querySelector("table");
// let tr = document.querySelectorAll("tr");
let edit = document.querySelector(".edit");
let delet = document.querySelector(".delete");
let modal_h1 = document.querySelector(".modal h1");
let btnClose = document.querySelector("[data-close]");
let fixInpName = document.querySelector(".fixInpName");
let fixInpAge = document.querySelector(".fixInpAge");
let modal = document.querySelector(".modal");
let todos = [];

form.onsubmit = (e) => {
  e.preventDefault();
  let k = 0;
  let todo = {
    num: todos.length + 1,
    name: inp_name.value,
    age: new Date().getFullYear() - inp_age.value,
    img: edit,
    img: delet,
  };
  todos.push(todo);
  reload(todos);
  console.log(todo);
};
reload(todos);

function reload(list) {
  table.innerHTML = "";
  for (let item of list) {
    // a
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    td.innerHTML = item.num;
    td1.innerHTML = item.name;
    td2.innerHTML = item.age;
    td.firstChild.innerHTML = item.num;
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    // b
    img1.style.width = "20px";
    img1.style.height = "20px";
    img2.style.width = "20px";
    img2.style.height = "20px";

    inp_name.innerHTML = item.name;
    inp_age.innerHTML = item.age;
    img1.src = "./images/8666681_edit_icon.png";
    img2.src = "/images/3844460_can_trash_icon.png";
    // c
    tr.append(td, td1, td2, td3);
    td3.append(img1, img2);
    table.append(tr);

    img2.onclick = () => {
      todos.splice(todos.indexOf(item), 1);
      tr.remove();
    };
    img1.onclick = () => {
      modal.classList.add("show");
      td1.value = item.name;
      td2.value = item.age;
      // td1.innerHTML = fixInpName.value
      // td2.innerHTML = fixInpAge.value
      changeForm.onsubmit = (e) => {
        e.preventDefault();

        item.name = fixInpName.value;
        td1.innerHTML = fixInpName.value;
        item.age = fixInpAge.value;
        td2.innerHTML = fixInpAge.value;
        modal.classList.remove("show");
        changeForm.reset();
      };
    };
    console.log(todos);
  }
}
btnClose.onclick = () => {
  modal.classList.remove("show");
};