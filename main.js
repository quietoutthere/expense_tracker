const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    createNewRow();
});

function grabExpenseValues() {
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const amount = document.getElementById('amount').value;
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    // deleteBtn.addEventListener('click', function(e) {
    //     const target = e.target;
    //     console.log(target);
    // });

    return [type, name, date, amount, deleteBtn];
    
}

function createNewRow() {
    let expenseValues = grabExpenseValues();

    const expenseNode1 = document.createTextNode(expenseValues[0]);
    const expenseNode2 = document.createTextNode(expenseValues[1]);
    const expenseNode3 = document.createTextNode(expenseValues[2]);
    const expenseNode4 = document.createTextNode(expenseValues[3]);
    
    const cell = document.createElement('td');
    const row = document.createElement('tr');
   
    const table = document.getElementById('table');
    console.log(expenseValues[0])
}
