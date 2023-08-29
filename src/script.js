import { format } from "date-fns"; 


class Todo{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = format(new Date(dueDate), "MMM dd, yyyy");
        this.priority = priority;
    };
};





