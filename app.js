const num1 = document.getElementById('in1')
const num2 = document.getElementById('in2')
const buttonAddi = document.getElementById('addi')
const buttonSubt = document.getElementById('subt')
const buttonMult = document.getElementById('mult')
const buttonDivi = document.getElementById('divi')
const resultsDisplay = document.getElementById('results')

buttonAddi.addEventListener('click', ()=> {
    const sum = Number(num1.value) + Number(num2.value)
    resultsDisplay.textContent = sum
})
buttonSubt.addEventListener('click', ()=> {
    const sum = Number(num1.value) - Number(num2.value)
    resultsDisplay.textContent = sum
})
buttonMult.addEventListener('click', ()=> {
    const sum = Number(num1.value) * Number(num2.value)
    resultsDisplay.textContent = sum
})
buttonDivi.addEventListener('click', ()=> {
    const sum = Number(num1.value) / Number(num2.value)
    resultsDisplay.textContent = sum
})