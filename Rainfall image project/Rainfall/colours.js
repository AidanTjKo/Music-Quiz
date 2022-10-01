// var colour_values = {
//     red: 0,
//     green: 255,
//     blue: 0
// };

// red_checker = 0;
// green_checker = 0;
// blue_checker = 0;
  
// //changing colour text

// red_p = document.getElementById('red_p');
// green_p = document.getElementById('green_p');
// blue_p = document.getElementById('blue_p');

// //a checker to see if the colour is moving up or down 0 or 1

// document.addEventListener("keydown", e => {

//     if(colour_values.red >= 255 ){
//         red_checker = 1;
//     }
//     else if (colour_values.green >= 255){
//         green_checker = 1;
//     }
//     else if (colour_values.blue >= 255){
//         blue_checker = 1;
//     }
//     else if (colour_values.red <= 0){
//         red_checker = 0;
//     }
//     else if (colour_values.green <= 0){
//         green_checker = 0;
//     }else if (colour_values.blue <= 0){
//         blue_checker = 0;
//     }
    
    
//     if(e.keyCode === 82 && red_checker === 0){
//         colour_values.red+=5;
//         console.log(colour_values.red);
//     }
//     else if(e.keyCode === 71 &&  green_checker === 0){
//         colour_values.green += 5;
//         console.log(colour_values.green);
//     }
//     else if(e.keyCode === 66 && blue_checker === 0){
//         colour_values.blue +=5;
//         console.log(colour_values.blue);
//     }
//     else if(e.keyCode === 82 && red_checker === 1){
//         colour_values.red-=5;
//         console.log(colour_values.red);
//     }
//     else if(e.keyCode === 71 && green_checker === 1){
//         colour_values.green -= 5;
//         console.log(colour_values.green);
//     }
//     else if(e.keyCode === 66 && colour_values.blue === 255 && blue_checker === 1){
//         colour_values.blue -=5;
//         console.log(colour_values.blue);
//     }

//     //change text inside the p tag
//     red_p.innerHTML = colour_values.red;
//     green_p.innerHTML = colour_values.green;
//     blue_p.innerHTML = colour_values.blue;
// });



