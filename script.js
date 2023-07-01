const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === '')
    {
        alert("You must write something!");
    }
    else{
        //adding items to the list
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //cross icon before the item of the list           
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();

    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTAsk(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTAsk();