const costInput = document.getElementById('cost-input');
const tipInput = document.getElementById('tip-input');
const calculateBtn = document.getElementById('calculateBtn');
const decreamentCountBtn = document.getElementById('decreament-count');
const increaseCountBtn = document.getElementById('increase-count');
const personToAdd = document.getElementById('persons-count');
const showModalTotal = document.getElementById('showModalTotal');



// Add Event Listener 
calculateBtn.addEventListener('click', handleClick);
costInput.addEventListener('focus', (e) => {
    const currentValue = parseFloat(e.target.value);
    e.target.value = currentValue.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
})


function handleClick(){
    //grab the users amount that was inserted
    const inputedCost = costInput.value;
    const inputedTip = tipInput.value;

   
    
    
    console.log(inputedCost + inputedTip)
}