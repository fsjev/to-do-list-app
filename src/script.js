import { format } from "date-fns"; 
import { Todo, TodoContainer, CategoryContainer } from "./classes.js";



const UIController = (() => {
    // allow user to interact with the program via UI
    // read the state of the program and display it in the browser
    const createCatBtn = document.getElementById("create-category");
    
})();



const AppFunctions = (() => {
    // 08312023
    const today = format(new Date(), "MMddyyyy");
    const CATEGORYCONTAINER = new CategoryContainer();
    const MAINTODOCONTAINER = new TodoContainer();
    CATEGORYCONTAINER.addCategory(MAINTODOCONTAINER);

    const createTodo = (title, dueDate) => {

        return new Todo(title, dueDate);
    };

    const createTodoContainer = () => {

        return new TodoContainer();
    };
    
})();

