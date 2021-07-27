function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
}
function randomColor(){
    let color = `${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)}`
    return color
}
$(document).ready(function(){
    $('.colorChanger').click(function(){
        let color = randomColor()
        console.log(color)
        $(this).css("background-color", `rgb(${color})`)
    })
    $('.widthChanger').click(function(){
        var width = getRandomInt(100)
        console.log(width)
        $(this).css("width", `${width}%`)
    })
})
// Math.ceil rounds the returned decimal number up
// Math.floor rounds down the returned decimal
// Math.random always returns a decimal from 0-.9 for example