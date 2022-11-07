const form = document.getElementById('form');
const typeInput = document.getElementById('type');
const nameInput = document.getElementById('name');
const dateInput = document.getElementById('date');
const amountInput = document.getElementById('amount');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    createNewRow();
    clearInputs();
});


    
function createNewRow() {
    const inputNode1 = document.createTextNode(typeInput.value);
    const inputNode2 = document.createTextNode(nameInput.value);
    const inputNode3 = document.createTextNode(dateInput.value);
    const inputNode4 = document.createTextNode(amountInput.value);
    const inputNode5 = addDeleteBtn();
   
    const table = document.getElementById('table');
    const newRow = table.insertRow();
    const newCell1 = newRow.insertCell(0);
    const newCell2 = newRow.insertCell(1);
    const newCell3 = newRow.insertCell(2);
    const newCell4 = newRow.insertCell(3);
    const newCell5 = newRow.insertCell(4);
    
    newCell1.appendChild(inputNode1);
    newCell2.appendChild(inputNode2);
    newCell3.appendChild(inputNode3);
    newCell4.appendChild(inputNode4);
    newCell5.appendChild(inputNode5);
}

function addDeleteBtn () {
    const deleteBtn = document.createElement('img');
    deleteBtn.id ='delete-button';
    deleteBtn.setAttribute('src', 'images/delete.png');
    deleteBtn.addEventListener('click', function(e) {
        const target = e.target.parentElement.parentElement;
        target.remove()
    });
        
        return deleteBtn
}

function clearInputs() {
    typeInput.value = '';
    nameInput.value = '';
    dateInput.value = '';
    amountInput.value = '';
}