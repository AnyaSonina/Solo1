let metricInput = document.querySelector(".metric__input")
let length = document.querySelector("#length")
let volume = document.querySelector("#volume")
let mass = document.querySelector("#mass")


let meterToFeet = metricInput.value*3.28084
let feetToMeter = metricInput.value*0.3048

let litterToGallon = metricInput.value*0.219969
let gallonToLitter = metricInput.value*4.54609

let kgToPound = metricInput.value*2.20462
let poundToKg = metricInput.value*0.453592

length.textContent = `${metricInput.value} meters = ${meterToFeet.toFixed(3)} feet | ${metricInput.value} feet = ${feetToMeter.toFixed(3)} meters`
volume.textContent = `${metricInput.value} liters = ${litterToGallon.toFixed(3)} gallons | ${metricInput.value} gallons = ${gallonToLitter.toFixed(3)} liters`
mass.textContent = `${metricInput.value} kilos = ${kgToPound.toFixed(3)} pounds | ${metricInput.value} pounds = ${poundToKg.toFixed(3)} kilos`

  
metricInput.addEventListener("input", function(e){
  let meterToFeet = metricInput.value*3.28084
  let feetToMeter = metricInput.value*0.3048
  let litterToGallon = metricInput.value*0.219969
  let gallonToLitter = metricInput.value*4.54609
  let kgToPound = metricInput.value*2.20462
  let poundToKg = metricInput.value*0.453592

  length.textContent = `${e.target.value} meters = ${meterToFeet.toFixed(3)} feet | ${e.target.value} feet = ${feetToMeter.toFixed(3)} meters`
  volume.textContent = `${e.target.value} liters = ${litterToGallon.toFixed(3)} gallons | ${e.target.value} gallons = ${gallonToLitter.toFixed(3)} liters`
  mass.textContent = `${e.target.value} kilos = ${kgToPound.toFixed(3)} pounds | ${e.target.value} pounds = ${poundToKg.toFixed(3)} kilos`
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