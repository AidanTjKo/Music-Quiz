var user_color = [];

green_quart = document.getElementById('green_quarter');
red_quart = document.getElementById('red_quarter');
yellow_quart = document.getElementById('yellow_quarter');
blue_quart = document.getElementById('blue_quarter');
green_quart.addEventListener("click", chooseColor('green'));
red_quart.addEventListener("click", chooseColor('red'));
yellow_quart.addEventListener("click", chooseColor('yellow'));
blue_quart.addEventListener("click", chooseColor('blue'));

function chooseColor(color){
    user_color.push(color);
    console.log( user_color);
}