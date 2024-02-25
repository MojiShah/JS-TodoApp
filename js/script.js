let $ = document;
let ulToDOElem = $.querySelector(".list-group");
let inputElem = $.querySelector(".form-control");
let todoForm = $.querySelector(".add");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

function addnewToDO(val) {
  let newLiElem = $.createElement("li");
  newLiElem.className=
    "list-group-item d-flex justify-content-between align-items-center";

  newToDoSpan=$.createElement('span');
  newToDoSpan.innerHTML=val;
  newLiElem.append(newToDoSpan);

  let toDoTrash = $.createElement('i');
  toDoTrash.className = "fa fa-trash-o delete";
  newLiElem.append(toDoTrash);

  toDoTrash.onclick=(e)=>e.target.parentElement.remove();

  ulToDOElem.append(newLiElem);
}

inputElem.addEventListener("keyup", (e) => {
  let newToDoValue = e.target.value;
  if (newToDoValue) {
    if (e.key === "Enter") {
      inputElem.value = "";
      addnewToDO(newToDoValue);
    }
  }
});
