import { format } from "date-fns"; 


class Todo{
    constructor(title, dueDate){
        this.title = title;
        this.dueDate = format(new Date(dueDate), "MMM dd, yyyy");
    };
};


class TodoContainer{
    constructor(){
        this.todos = [];
    };

    inTodos(todo){
        return this.todos.some(item => item === todo);
    };

    addTodo(newTodo){
        this.todos.push(newTodo);
    };

    // getTodo(){

    // };

    deleteTodo(todo){
        this.todos = this.todos.filter(item => item !== todo);
    };
};

const mainTodoContainer = new TodoContainer();


function createTodo(){

    // title, dueDate

    
    return new Todo(title, dueDate);
};

function createTodoContainer(){

    return new TodoContainer();
};

