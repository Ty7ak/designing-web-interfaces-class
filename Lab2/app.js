"use strict";

const listInput = document.querySelector('.list-input');
const inputButton = document.querySelector('.input-button');
const todoList = document.querySelector('.todo-list');
const completedList = document.querySelector(".completed-list")
const undoButton = document.querySelector('.undo-button');

inputButton.addEventListener("click", addItem);
todoList.addEventListener("click", useButtons);
undoButton.addEventListener("click", undo);

// add item to list (with buttons)
function addItem(e) {
    e.preventDefault();

    // list div
    const listDiv = document.createElement('div');
    listDiv.classList.add("list");
    
    // item div
    const itemDiv = document.createElement('li');
    itemDiv.innerText = listInput.value;
    itemDiv.classList.add("item");
    listDiv.appendChild(itemDiv);
    
    // completed button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-button");
    listDiv.appendChild(completeButton)

    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-minus-square"></i>';
    deleteButton.classList.add("delete-button");
    listDiv.appendChild(deleteButton)

    todoList.appendChild(listDiv);

    // clear input
    listInput.value = "";
}

let itemCache = null;

// adds functionality of buttons on each item of list
function useButtons(e){
    const item = e.target;

    // complete task
    if(item.classList[0] === 'complete-button') {
        const parent = item.parentElement;
        parent.classList.toggle("completed");

        
        let dateString = new Date();
        const dateLi = document.createElement('li');
        let taskName = parent.querySelector('.item').textContent;
  
        if (parent.classList.contains("completed")) {
            dateLi.innerHTML = "Finished task " + taskName + " at " + dateString.toLocaleString();
            dateLi.classList.add("completion-date");
        }

        else {
            dateLi.innerHTML = "Resumed task " + taskName + " at " + dateString.toLocaleString();
            dateLi.classList.add("resume-date");
        }

        completedList.appendChild(dateLi);
    } 

    // delete task (USING JQUERY)
    if(item.classList[0] === 'delete-button') { 
    
        $(".pop-outer").fadeIn("medium");
        
        $(".modal-return").click(function (){
            $(".pop-outer").fadeOut("medium");
        });

        $(".modal-delete").click(function(){
            itemCache = item.parentElement.querySelector('.item').textContent;;
            $(item).parent().remove();

            $(".pop-outer").fadeOut("medium");
        })
    }
}


// adds undo functionality for last deleted item in the list
function undo(e){

    e.preventDefault();
    if (itemCache !== null){
        document.getElementById("input-field").value = itemCache;
        addItem(e);
        itemCache = null;
    }
    
    else {
        return;
    }

}


