import { format } from "date-fns"; 
import { Todo, TodoContainer, CategoryContainer } from "./classes.js";



const UIController = (() => {
    // allow user to interact with the program via UI
    // read the state of the program and display it in the browser
    const createCatBtn = document.getElementById("create-category");
    const addtodoBtn = document.getElementById("add-to-do");


    const showNewCategoryInput = () => {

        const newInput = document.createElement("input");
        newInput.setAttribute("type", "text");
        newInput.setAttribute("placeholder", "Type new category name");
        newInput.setAttribute("class", "js-input");

        const btnDiv = document.createElement("div");
        btnDiv.setAttribute("class", "btn-div");

        const newCategoryBtnOk = document.createElement("button");
        newCategoryBtnOk.setAttribute("class", "js-button");
        newCategoryBtnOk.setAttribute("id", "ok");
        newCategoryBtnOk.textContent = "Ok";

        const newCategoryBtnCancel = document.createElement("button");
        newCategoryBtnCancel.setAttribute("class", "js-button");
        newCategoryBtnCancel.setAttribute("id", "cancel");
        newCategoryBtnCancel.textContent = "Cancel";
        newCategoryBtnCancel.onclick = cancelCategoryInput;
        
        const containerOne = document.querySelector(".container-one");
        createCatBtn.style.display = "none";
        containerOne.appendChild(newInput);
        btnDiv.appendChild(newCategoryBtnOk);
        btnDiv.appendChild(newCategoryBtnCancel);
        containerOne.appendChild(btnDiv);
    };

    const showNewTodoInput = () => {
        
        const newInput = document.createElement("input");
        newInput.setAttribute("type", "text");
        newInput.setAttribute("placeholder", "What to do?");
        newInput.setAttribute("class", "js-input-to-do");

        const newInputDate = document.createElement("input");
        newInputDate.setAttribute("type", "date");
        newInputDate.setAttribute("class", "js-input-to-do-date");

        const btnDiv = document.createElement("div");
        btnDiv.setAttribute("class", "btn-div");

        const newTodoBtnOk = document.createElement("button");
        newTodoBtnOk.setAttribute("class", "js-button");
        newTodoBtnOk.setAttribute("id", "ok");
        newTodoBtnOk.textContent = "Ok";

        const newTodoBtnCancel = document.createElement("button");
        newTodoBtnCancel.setAttribute("class", "js-button");
        newTodoBtnCancel.setAttribute("id", "cancel");
        newTodoBtnCancel.textContent = "Cancel";
        newTodoBtnCancel.onclick = cancelTodoInput;

        const containerTwo = document.querySelector(".container-two");
        addtodoBtn.style.display = "none";
        containerTwo.appendChild(newInput);
        containerTwo.appendChild(newInputDate);
        btnDiv.appendChild(newTodoBtnOk);
        btnDiv.appendChild(newTodoBtnCancel);
        containerTwo.appendChild(btnDiv);
    };

    const cancelTodoInput = (e) => {

        const containerChildren = e.target.parentNode.parentNode.children;
        const containerChildrenArray = Array.from(containerChildren);
        const arrayWithoutAddBtn = containerChildrenArray.filter(item => item.id !== "add-to-do");
        arrayWithoutAddBtn.forEach(item => item.remove());
        addtodoBtn.style.removeProperty("display");
    };

    const cancelCategoryInput = (e) => {

        const containerChildren = e.target.parentNode.parentNode.children;
        const containerChildrenArray = Array.from(containerChildren);
        const arrayWithoutCatBtn = containerChildrenArray.filter(item => item.id !== "create-category");
        arrayWithoutCatBtn.forEach(item => item.remove());
        createCatBtn.style.removeProperty("display");
    };

    createCatBtn.addEventListener("click", showNewCategoryInput);
    addtodoBtn.addEventListener("click", showNewTodoInput);

    // window.addEventListener("click", () => {
    //     console.log("click!");
    // });

    return {  };
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

