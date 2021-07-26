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
        $(this).css("width", `${getRandomInt(100)}%`)
    })
})
