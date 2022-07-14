const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){   
    if (xhr.readyState == 4){
        if (xhr.status == 200){
            window.localStorage.setItem('songs',xhr.responseText);
            console.log(window.localStorage.getItem('songs'));
        }
        
        if(xhr.status == 404){
                console.log('File or resource not found'); 
        }
    }
};

function getRandomProperty(obj) { //function to get a random genre
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
}

function transfer(genre){
    if (genre != 'Random'){
        window.localStorage.setItem('genre',genre);
        location.href = "game_page/game_home.html";
    }
    else{
        var random_genre = getRandomProperty(song_list.all); //calls the function to get a random genre
        window.localStorage.setItem('genre', random_genre);
        location.href = "game_page/game_home.html";
    }
}

function setTheme(theme){
    window.localStorage.clear('theme');
    window.localStorage.setItem('theme', theme);
    console.log(window.localStorage.getItem('theme'));
    document.documentElement.className = window.localStorage.getItem('theme');
}
document.documentElement.className = window.localStorage.getItem('theme');
xhr.open('get', '../json/songs.json', true);
xhr.send();
let song_list = JSON.parse(window.localStorage.getItem('songs'));