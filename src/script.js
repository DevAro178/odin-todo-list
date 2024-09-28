import "./style.css";
import { initializeSidebar } from "./sidebar.js";
import { initializeContent, addTask } from "./content.js";
import controller from "./controller.js";
import { data } from "./data.js";

const ROOT = document.querySelector("body div#root");
ROOT.append(initializeSidebar(), initializeContent());
controller();
addTask();
