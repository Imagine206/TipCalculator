const costInput = document.getElementById('cost-input');
const tipInput = document.getElementById('tip-input');
const calculateBtn = document.getElementById('calculateBtn');
const decreamentCountBtn = document.getElementById('decreament-count');
const increaseCountBtn = document.getElementById('increase-count');
const personToAdd = document.getElementById('persons-count');
const showModalTotal = document.getElementById('showModalTotal');



// initialize variables
let headCount = 0;


// Add Event Listener 
calculateBtn.addEventListener('click', handleClick);
decreamentCountBtn.addEventListener('click', () => {
    headCount--;
    personToAdd.textContent = headCount;
});
increaseCountBtn.addEventListener('click', () => {
    headCount++;
    personToAdd.textContent = headCount;
});





function handleClick(e){
    e.preventDefault();
    
    calculateTotal(inputedCost, inputedTip);
    
    console.log(`Cost: ${inputedCost}`);
    console.log(`Tip: ${inputedTip}%`);
    console.log(`Tip amount: ${tipAmount.toFixed(2)}`);
    console.log(`Total: ${total.toFixed(2)}`)
   
}


function calculateTotal(cost, tip){
    
    //grab the users amount that was inserted
    const cost = parseFloat(costInput.value);
    const tip = parseFloat(tipInput.value);


    const tipAmount = cost * (tip / 100)
    const total = cost + tip;

}