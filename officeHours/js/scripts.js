console.log("Testing JS Linking")

// function onLoad() {
//     alert("Welcome to Office Hours")
// }
// onLoad()

function date() {
    console.log("date button clicked")
    document.getElementById('date').innerHTML = new Date()
}

let imgs = "Here you go!"
let img = ['./images/meme01.jpg', './images/meme02.jpg', './images/meme03.jpg', './images/meme04.jpg']
let meme = 'meme'

function showImgs() {
    console.log("Img button clicked")
    console.log(imgs)
    console.log(img)
    console.log(meme)
    let box = `<h2>${imgs}</h2><div>`
    for(var x of img) {
        box += `<img src='${x}' alt='${meme}' />`
    }
    box += `</div>`
    console.log(box)
    document.getElementById('showImg').innerHTML = box
}

let numbers = [1,2,3,7,8,9]
document.getElementById('arr01').innerHTML = "Original Array: <br>" + numbers

numbers.push(10) // adds to end of array
numbers.pop(10) // removes from end of array
numbers.unshift(0) // adds to front of array
numbers.shift(0) // removes from front of array
console.log(numbers)

function insertItems() {
    numbers.splice(3,0, 4,5,6)
    console.log(numbers)
    document.getElementById('arr02').innerHTML = "New Array:<br>" + numbers
}
function removeItems() {
    numbers.splice(3,3)
    console.log(numbers)
    document.getElementById('arr03').innerHTML = "New Improved Array:<br>" + numbers
}

let kids = ['Shannon', 'Aiden']
let stepKids = ['Nathan', 'Hayden']
let dogs = ['Bear', 'Abby', 'Lucy', 'Roxy', 'Copper']

document.getElementById('arr04').innerHTML = 'Biological Kids: ' + kids
document.getElementById('arr05').innerHTML = 'Step Kids: ' + stepKids
document.getElementById('arr06').innerHTML = 'Dogs: ' + dogs

function myFamily() {
    let allKids = kids.concat(stepKids)
    console.log(allKids)
    let addingDogs = allKids.concat(dogs)
    console.log(addingDogs)
    document.getElementById('arr08').innerHTML = 'My whole Family: Nick,' + addingDogs + ',Purrl'
}