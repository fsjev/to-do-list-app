import { format } from "date-fns"; 
import { Todo, TodoContainer, CategoryContainer } from "./classes";



const mainTodoContainer = new TodoContainer();


function createTodo(){

    // title, dueDate

    
    return new Todo(title, dueDate);
};

function createTodoContainer(){

    return new TodoContainer();
};

