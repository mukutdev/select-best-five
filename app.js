// variables
const selectButtons = document.querySelectorAll('.player-select-btn ')
const selectedPlayersList = document.getElementById('selected-player-list')
const totalPlayerExpenses = document.getElementById('calculate')
const calculateTotalCost = document.getElementById('calculate-total')

// capturing all button 
for(const selectBtn of selectButtons) {
    selectBtn.addEventListener('click', selectButton)
} 

// select button function 
function selectButton(btn){
    const disableBtn = btn.target
    const playerName = btn.target.parentNode.parentNode.children[0].innerText
    const createLi = document.createElement('li')
    createLi.classList.add('text-white','font-medium','text-lg','leading-10')
    createLi.innerText = playerName
     if(selectedPlayersList.children.length >= 5){
        alert('You have added maximum number of players')

     }else{
       selectedPlayersList.appendChild(createLi)
       disableBtn.disabled = true
}
}

// converting string to number
function strToNum(id){
    const elementId = document.getElementById(id)
    const elementIdToNum = parseInt(elementId.value)
    return elementIdToNum;
}
// set innerText function 
function setInnerText(id , value){
   document.getElementById(id).innerText = value
}
// total player expense 

function totalPlayerExpense(){
  const perPlayerCost = strToNum('per-player')
  const totalPlayers = selectedPlayersList.children.length
  const totalExpenses = perPlayerCost * totalPlayers
  setInnerText('total-player-cost', totalExpenses)  
  return totalExpenses;
}

// calculate total costing

function calculateTotalCosting(){
    console.log(totalPlayerExpense());
    const managerCost = strToNum('manager')
    const coachCost= strToNum('coach')
    const totalCost = totalPlayerExpense() + managerCost + coachCost
    setInnerText('total-cost', totalCost)
}

// event listeners
totalPlayerExpenses.addEventListener('click', totalPlayerExpense)
calculateTotalCost.addEventListener('click', calculateTotalCosting)