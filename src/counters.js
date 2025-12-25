import { isToday, isThisWeek, isOverdue } from "./dateUtils";

export function updateCountersFromDOM() {
  const cards = Array.from(document.querySelectorAll(".toDoBox"));

  const active = cards.filter(c => c.dataset.completed !== "true");
  const completed = cards.filter(c => c.dataset.completed === "true");

  const all = active.length;
  const today = active.filter(c => isToday(c.dataset.deadline)).length;
  const week = active.filter(c => isThisWeek(c.dataset.deadline)).length;
  const overdue = active.filter(c => isOverdue(c.dataset.deadline)).length;

  document.querySelector(".AllToDo").textContent = String(all);
  document.querySelector(".today_toDo").textContent = String(today);
  document.querySelector(".weekToDo").textContent = String(week);
  document.querySelector(".overdue").textContent = String(overdue);
  document.querySelector(".completed").textContent = String(completed.length);
}
