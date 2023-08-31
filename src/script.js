import { format } from "date-fns"; 
import { Todo, TodoContainer, CategoryContainer } from "./classes.js";

const CATEGORYCONTAINER = new CategoryContainer();

const MAINTODOCONTAINER = new TodoContainer();

CATEGORYCONTAINER.addCategory(MAINTODOCONTAINER);

const UIController = (() => {
    // allow user to interact with the program via UI
    // read the state of the program and display it in the browser
    const createCatBtn = document.getElementById("create-category");
    
})();

function createTodo(){

    // title, dueDate

    
    return new Todo(title, dueDate);
};

function createTodoContainer(){

    return new TodoContainer();
};

