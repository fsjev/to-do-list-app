class Todo{
    constructor(title, dueDate){
        this.title = title;
        this.dueDate = dueDate;
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

    deleteTodo(todoTitle){
        const todo = this.todos.find(todo => todo.title === todoTitle);
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

    addCategory(newCategory, name, bool){
        const categoryObject = {
            category: newCategory,
            categoryName: name,
            inCategory: bool
        };
        this.categories.push(categoryObject);
    };

    getActiveCategory(){
        return this.categories.find(cat => cat.inCategory === true);
    };

    deleteCategory(categoryName){
        const category = this.categories.find(category => category.categoryName === categoryName);
        this.categories = this.categories.filter(item => item !== category);
    };
};

export { Todo, TodoContainer, CategoryContainer};