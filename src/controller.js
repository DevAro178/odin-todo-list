import { data } from "./data";
import { setContent } from "./content";
import { setActiveClassForProject } from "./sidebar";

export default function () {
  EventListeners();
}

function EventListeners() {
  let projectbtns = document.querySelectorAll("li.project");
  projectbtns.forEach((e) => {
    e.addEventListener("click", () => {
      setActiveClassForProject(e.dataset["id"]);
      setContent(getProjectById(e.dataset["id"]));
    });
  });
}

function getProjectById(id) {
  let obj = null;
  data.forEach((e) => {
    if (e.id == id) obj = e;
  });
  return obj;
}
