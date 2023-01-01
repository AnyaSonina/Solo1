let metricInput = document.querySelector(".metric__input")
let length = document.querySelector("#length")
let volume = document.querySelector("#volume")
let mass = document.querySelector("#mass")

let meterToFeet
let feetToMeter
let litterToGallon
let gallonToLitter
let kgToPound
let poundToKg

function unitsCalc() {
  meterToFeet = metricInput.value*3.28084
  feetToMeter = metricInput.value*0.3048
  
  litterToGallon = metricInput.value*0.219969
  gallonToLitter = metricInput.value*4.54609
  
  kgToPound = metricInput.value*2.20462
  poundToKg = metricInput.value*0.453592
}

unitsCalc()

function renderHTML() {
  length.textContent = `${metricInput.value} meters = ${meterToFeet.toFixed(3)} feet | ${metricInput.value} feet = ${feetToMeter.toFixed(3)} meters`
  volume.textContent = `${metricInput.value} liters = ${litterToGallon.toFixed(3)} gallons | ${metricInput.value} gallons = ${gallonToLitter.toFixed(3)} liters`
  mass.textContent = `${metricInput.value} kilos = ${kgToPound.toFixed(3)} pounds | ${metricInput.value} pounds = ${poundToKg.toFixed(3)} kilos`

}

renderHTML() 
  
metricInput.addEventListener("input", function(){
  unitsCalc()
  renderHTML() 
})

const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark')
  document.getElementById("metric").classList.toggle('dark')
  document.getElementById('mass_cont').classList.toggle('dark')
  document.getElementById('volume_cont').classList.toggle('dark')
  document.getElementById('length_cont').classList.toggle('dark')
  document.getElementById('metric__conversion').classList.toggle('dark')
  
})