// var colors = ["red", "yellow", "green"]

var safeColors = ['00','33','66','99','cc','ff'];
var rand = function() {
    return Math.floor(Math.random()*6);
};
var randomColor = function() {
    var r = safeColors[rand()];
    var g = safeColors[rand()];
    var b = safeColors[rand()];
    return "#"+r+g+b;
};

$('document').ready(function() {
    $('#random').click(function() {
        $('#random').css(
            'background-color', randomColor()
        )
    })
})

// example option #1 link https://codepen.io/Halfhappy/pen/DmxuB
// tested function link http://pythontutor.com/javascript.html#code=var%20safeColors%20%3D%20%5B'00','33','66','99','cc','ff'%5D%3B%0Avar%20rand%20%3D%20function%28%29%20%7B%0A%20%20%20%20return%20Math.floor%28Math.random%28%29*6%29%3B%0A%7D%3B%0Avar%20randomColor%20%3D%20function%28%29%20%7B%0A%20%20%20%20var%20r%20%3D%20safeColors%5Brand%28%29%5D%3B%0A%20%20%20%20var%20g%20%3D%20safeColors%5Brand%28%29%5D%3B%0A%20%20%20%20var%20b%20%3D%20safeColors%5Brand%28%29%5D%3B%0A%20%20%20%20return%20%22%23%22%2Br%2Bg%2Bb%3B%0A%7D%3B%0A%0Aconsole.log%28randomColor%28%29%29%0Aconsole.log%28randomColor%28%29%29%0Aconsole.log%28randomColor%28%29%29%0Aconsole.log%28randomColor%28%29%29&curInstr=55&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D

// JavaScript

// var safeColors = ['00','33','66','99','cc','ff'];
// var rand = function() {
//     return Math.floor(Math.random()*6);
// };
// var randomColor = function() {
//     var r = safeColors[rand()];
//     var g = safeColors[rand()];
//     var b = safeColors[rand()];
//     return "#"+r+g+b;
// };
// jQuery

// $(document).ready(function() {
//     $('#button').click(function() {
//         $('div').each(function() {
//             $(this).css('background',randomColor());
//         });
//     });
// });
// Sample