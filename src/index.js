import "./styles.css";
import { getToDo } from "./createToDo";
import { updateCountersFromDOM } from "./counters";

getToDo();

const addTodo = document.querySelector(".toDoButton");
addTodo.addEventListener("click", ()=>{
    document.getElementById("toDoForm").showModal();
});
const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", (e)=>{
    e.preventDefault();
    document.getElementById("toDoForm").close();
});

const items = document.querySelector(".items");

// ONE listener handles all task buttons, even newly created ones
items.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const action = btn.dataset.action;
  if (!action) return;

  const card = btn.closest(".toDoBox");
  if (!card) return;

  if (action === "delete") {
    card.remove();
    updateCountersFromDOM();
    return;
  }

  if (action === "complete") {
    const isDone = card.dataset.completed === "true";

    // toggle
    card.dataset.completed = isDone ? "false" : "true";
    card.classList.toggle("completedTask", !isDone);

    // change button label
    btn.textContent = isDone ? "Complete" : "Undo";

    updateCountersFromDOM();
  }
});
updateCountersFromDOM();
