import list from "./list.json";

let data = (() => {
  let localData = localStorage.getItem("todo-list-Object");
  if (!localData)
    localStorage.setItem("todo-list-Object", JSON.stringify(list));
  return JSON.parse(localStorage.getItem("todo-list-Object"));
})();

export { data };
