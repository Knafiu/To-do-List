///factory function that creates a to do on clicking the Add Todo button.
/// it'll be a dialog with all the info(title, description, dueDate and priority) and submit button. 
///when user clicks submit we collect the info in the form and return that 
import { addTodo } from "./addToDo";
import { updateCountersFromDOM } from "./counters";
export function getToDo(){
    const dialog = document.getElementById("toDoForm");
    const submit = document.querySelector(".submit");
    submit.addEventListener("click", (e)=>{
        e.preventDefault();
        const title = document.getElementById("title").value;
        const priority = document.getElementById("priority").value;
        const projects = document.getElementById("projects").value;
        const deadline = document.getElementById("deadline").value;
        const notes = document.getElementById("notes").value;
        addTodo(title, projects, priority, deadline, notes);
        updateCountersFromDOM();
        dialog.close();
    })

    
    
}