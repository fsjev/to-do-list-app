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

    deleteTodo(todo){
        this.todos = this.todos.filter(item => item !== todo);
    };
};


class CategoryContainer{
    constructor(){
        this.categories = [];
    };

    inCategories(category){
        return this.categories.some(item => item === category);
    };

    addCategory(newCategory, name){
        const categoryObject = {
            category: newCategory,
            categoryName: name
        };
        this.categories.push(categoryObject);
    };

    deleteCategory(category){
        this.todos = this.categories.filter(item => item !== category);
    };
};

export { Todo, TodoContainer, CategoryContainer};