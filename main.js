const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    createNewRow();
});

function grabInputValues() {
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const amount = document.getElementById('amount').value;
    const deleteBtn = addDeleteBtn();
    
    return [type, name, date, amount, deleteBtn];
    
}

function createNewRow() {
    let inputValues = grabInputValues();

    const inputNode1 = document.createTextNode(inputValues[0]);
    const inputNode2 = document.createTextNode(inputValues[1]);
    const inputNode3 = document.createTextNode(inputValues[2]);
    const inputNode4 = document.createTextNode(inputValues[3]);
    const inputNode5 = inputValues[4];
   
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

