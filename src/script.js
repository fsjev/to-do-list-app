import { format } from "date-fns"; 
import { Todo, TodoContainer, CategoryContainer } from "./classes.js";

const CATEGORYCONTAINER = new CategoryContainer();

const MAINTODOCONTAINER = new TodoContainer();

CATEGORYCONTAINER.addCategory(MAINTODOCONTAINER);

function createTodo(){

    // title, dueDate

    
    return new Todo(title, dueDate);
};

function createTodoContainer(){

    return new TodoContainer();
};

