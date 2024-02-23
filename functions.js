const txtInput = document.getElementById("txt");
const add = document.getElementById("addbtn");
const remove = document.getElementById("removebtn");
const list = document.getElementById("list");

add.addEventListener("click", addInput);
remove.addEventListener("click", removeInput);

function addInput() {
        let listItem = document.createElement("li");
        let check = document.createElement("input");
        check.type = "checkbox";
        
        if(txt.value == ""){
            alert("no input detected");
        }

        else {
            listItem.textContent = txtInput.value;
            listItem.appendChild(check);
            list.appendChild(listItem);
            txtInput.value = "";
        }
        
}

function removeInput(){
    const listItem = list.lastElementChild;
    list.removeChild(listItem);
}
