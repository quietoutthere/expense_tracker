const runExpenses = document.getElementById('button');

runExpenses.addEventListener('click', (e)=> {
    e.preventDefault();
    const expenseInput = document.getElementById('expense-table');
    const name = document.getElementById('name').value;
    const nameOfExpense = document.createElement('td');
    nameOfExpense.appendChild(expenseInput); 
})