///factory function that would take these parameters title, description, dueDate and priority and create a todo, acccess .content and add it to the list 
export function addTodo(title, projects, priority, deadline, notes) {
    const items = document.querySelector(".items");
  
    // unique id for this card (simple + enough for this project)
    const id = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
  
    const box = document.createElement("div");
    box.classList.add("toDoBox");
    box.dataset.id = id;
    box.dataset.deadline = deadline || "";
    box.dataset.completed = "false";
  
    const toDoLeft = document.createElement("div");
    toDoLeft.classList.add("left");
  
    const toDoTitle = document.createElement("h1");
    toDoTitle.textContent = title;
  
    const toDoPriority = document.createElement("h3");
    toDoPriority.textContent = priority;
  
    toDoLeft.appendChild(toDoTitle);
    toDoLeft.appendChild(toDoPriority);
  
    const toDoRight = document.createElement("div");
    toDoRight.classList.add("right");
  
    const toDoProjects = document.createElement("h1");
    toDoProjects.textContent = projects;
  
    const toDoDeadline = document.createElement("h3");
    toDoDeadline.textContent = deadline ? deadline : "No deadline";
  
    toDoRight.appendChild(toDoProjects);
    toDoRight.appendChild(toDoDeadline);
  
    // Actions (Complete / Delete)
    const actions = document.createElement("div");
    actions.classList.add("actions");
  
    const completeBtn = document.createElement("button");
    completeBtn.type = "button";
    completeBtn.classList.add("completeBtn");
    completeBtn.dataset.action = "complete";
    completeBtn.textContent = "Complete";
  
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.dataset.action = "delete";
    deleteBtn.textContent = "Delete";
  
    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);
  
    toDoRight.appendChild(actions);
  
    box.appendChild(toDoLeft);
    box.appendChild(toDoRight);
  
    // Notes go INSIDE the box so delete removes everything
    const additional = document.createElement("p");
    additional.classList.add("notes");
    additional.textContent = notes;
  
    box.appendChild(additional);
  
    items.appendChild(box);
  }
  