let myArray = []

let washCar = document.querySelector("#wash-car")
document.getElementById("wash-car").disabled = false

const mowLawn = document.querySelector("#mow-lawn")
document.getElementById("mow-lawn").disabled = false

const pullWeeds = document.querySelector("#pull-weeds")
document.getElementById("pull-weeds").disabled = false

const total = document.querySelector("#total")
const task = document.querySelector("#task")
let price = document.querySelector("#price")

const sendInvoice = document.getElementById("send")

washCar.addEventListener("click", function () {
    myArray.push(10)
    task.innerHTML += `<p>Wash car</p>`
    console.log(myArray)
        total.innerHTML += `<p>$` + 10 +`</p>`
    document.getElementById("wash-car").disabled = true
    for (let i = 0; i < myArray.length; i++) {
        price.innerHTML = `$` + myArray.reduce(function(a, b) {
            return a + b
        }, 0)
    }
})

mowLawn.addEventListener("click", function () {
    myArray.push(20)
    task.innerHTML += `<p>Mow lawn</p>`
    console.log(myArray)
        total.innerHTML += `<p>$` + 20 +`</p>`
    document.getElementById("mow-lawn").disabled = true
    for (let i = 0; i < myArray.length; i++) {
        price.innerHTML = `$` + myArray.reduce(function(a, b) {
            return a + b
        }, 0)
    }
})

pullWeeds.addEventListener("click", function () {
    myArray.push(20)
    task.innerHTML += `<p>Pull Weeds</p>`
    console.log(myArray)
        total.innerHTML += `<p>$` + 30 +`</p>`
    document.getElementById("pull-weeds").disabled = true
    for (let i = 0; i < myArray.length; i++) {
        price.innerHTML = `$` + myArray.reduce(function(a, b) {
            return a + b
        }, 0)
    }
})

sendInvoice.addEventListener("click", function() {
    document.getElementById("wash-car").disabled = false
    document.getElementById("mow-lawn").disabled = false
    document.getElementById("pull-weeds").disabled = false
    task.innerHTML = "TASK"
    total.innerHTML = "TOTAL"
    price.innerHTML = "$0"
    myArray = []
    alert ("Invoice send!")
})










/*
washCar.addEventListener("click", function(){
    task.innerHTML += `<p>Wash Car</p>`
    myArray.push(10)
    for(let i = 0; i < myArray.length; i++){
       price.innerHTML = "$" + myArray[i]
       total.innerHTML += "<p>$" + myArray[i] 
    }
})

mowLawn.addEventListener("click", function(){
    task.innerHTML += `<p>Mow Lawn</p>`
    myArray.push(20)
    for(let i = 0; i < myArray.length; i++){
       price.innerHTML = "$" + myArray[i]
       total.innerHTML += "<p>$" + myArray[i] 
    }
})
*/




/*
mowLawn.addEventListener("click", function(){
    total.innerHTML += "<p>$20</p>"
    task.innerHTML +="<p>Mow Lawn</p>"
    price.innerHTML = `$` + myArray[1]
    myArray.push(20)
    console.log(myArray)
})
pullWeeds.addEventListener("click", function(){
    total.innerHTML += "<p>$30</p>"
    task.innerHTML +="<p>Pull Weeds</p>"
    price.innerHTML = `$` + 30
    myArray.push(30)
    console.log(myArray)
})
*/


 

