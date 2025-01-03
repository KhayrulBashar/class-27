var totalIncome = 0;
var totalExpense = 0;
var totalsError = document.querySelector('.totals');
var errorIncome = document.getElementById('errorIncome');
var errorExpense = document.getElementById('errorExpense');
var updateMessage = document.getElementById('updateMessage');
errorIncome.style.display = 'none';
errorExpense.style.display = 'none';
updateMessage.style.display = 'none';
totalsError.style.backgroundColor = '#34495E';

var incomeList = [];

function addIncome(){
    const incomeInput = document.getElementById('income');
    const incomeValue = +incomeInput.value || 0;
    errorExpense.style.display = 'none';
    if(incomeValue === 0){
        errorIncome.style.display = 'block';
        errorIncome.textContent = 'Please enter greater than 0.';
        errorIncome.style.backgroundColor = 'red';
        incomeInput.value = '';
        updateMessage.style.display = 'none';
        totalsError.style.backgroundColor = '#34495E';
        return;
    }
    if(incomeValue < 0){
        errorIncome.style.display = 'block';
        errorIncome.style.background = 'red';
        errorIncome.textContent = 'Sorry, you entered less than 1';
        incomeInput.value = '';
        updateMessage.style.display = 'none';
        totalsError.style.backgroundColor = '#34495E';
        return;
    }else{
        incomeList.push(incomeValue);
        
        var incomeListShow = document.querySelector("div:nth-child(3)> div > span");
        
        var outpuIncometList = ''; 
        for(var i = 0; i < incomeList.length; i++){
            var incomeV = +incomeList[i];
            outpuIncometList += incomeV + "<br>";
        }
        incomeListShow.innerHTML = outpuIncometList;
        incomeListShow.style.backgroundColor = "green";
    }
    
    
    totalIncome += incomeValue;
    errorIncome.style.display = 'block';
    errorIncome.textContent = 'Your income value successfully added.'
    errorIncome.style.backgroundColor = 'green';
    const incomeOutput = document.getElementById('total-income');
    incomeOutput.textContent = totalIncome.toFixed(2);
    
    updateBalance();
    incomeInput.value = '';
}

var expenseShowList = document.querySelector('div:nth-child(4) div > span');

var expensList = [];
function addExpense(){
    const expenseInput = document.getElementById('expense');
    const expenseValue = +expenseInput.value || 0;
    
    errorIncome.style.display = 'none';
    if(expenseValue > totalIncome - totalExpense ){
        updateMessage.style.display = 'none';
        errorExpense.style.display = 'block';
        errorExpense.textContent = 'Your balance is low';
        errorExpense.style.backgroundColor = 'red';
        totalsError.style.backgroundColor = 'red';
        expenseInput.value = '';
        return;
    }
    
    if(expenseValue <= 0){
        errorExpense.style.display = 'block';
        errorExpense.textContent = 'Sorry! you entered less than 1.';
        errorExpense.style.backgroundColor = 'red';
        expenseInput.value = '';
        updateMessage.style.display = 'none';
        totalsError.style.backgroundColor = 'red';
        return;
    }else{
        expensList.push(expenseValue);
        
        var expenseV = "";
        for(var i = 0; i < expensList.length; i++){
            var expenseListV = expensList[i];
            expenseV += -expenseListV +'<br>';
        }
        expenseShowList.innerHTML = expenseV;
        expenseShowList.style.backgroundColor = 'red';
    }
    
    totalExpense += expenseValue;
    errorExpense.style.display = 'block';
    errorExpense.style.backgroundColor = 'green';
    errorExpense.textContent = 'Your expense value successfully added.';
    const expenseOutput = document.getElementById('total-expense');
    expenseOutput.textContent = totalExpense.toFixed(2);
    totalsError.style.backgroundColor = '#34495E';
    updateBalance();
    expenseInput.value = '';
}

function updateBalance(){
    const balance = document.getElementById('balance');
    var finalBalance = (totalIncome -  totalExpense).toFixed(2);
    balance.textContent = finalBalance;
    updateMessage.style.display = 'block';
    updateMessage.textContent = 'Balance has updated!';
    updateMessage.style.color = '#51BE17';
}