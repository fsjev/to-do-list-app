import { format } from "date-fns"; 


class Todo{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = format(new Date(dueDate), "MMM dd, yyyy");
        this.priority = priority;
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


function createTodo(title, description, dueDate, priority){

    // title, description, dueDate, priority


    
    return new Todo(title, description, dueDate, priority);
};

