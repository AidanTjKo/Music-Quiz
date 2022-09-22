const submit = document.getElementById('submit');
const songText = document.getElementById('song');
const artistText = document.getElementById('artist');
const extraText = document.getElementById('extra');
const scoreText = document.getElementById('score');
const full_heart_1 = document.getElementById('full_heart_1');
const full_heart_2 = document.getElementById('full_heart_2');
const full_heart_3 = document.getElementById('full_heart_3');
const empty_heart_1 = document.getElementById('empty_heart_1');
const empty_heart_2 = document.getElementById('empty_heart_2');
const empty_heart_3 = document.getElementById('empty_heart_3');

var score = 0;
var lives = 3;

function home(){
    location.href = "../index.html";
}

function setTheme(theme){
    window.localStorage.clear('theme');
    window.localStorage.setItem('theme',theme);
    document.documentElement.className = window.localStorage.getItem('theme');
    console.log(window.localStorage.getItem('theme'));
}

document.documentElement.className = window.localStorage.getItem('theme');
genre_title.innerHTML = window.localStorage.getItem('genre');

let song_list = JSON.parse(window.localStorage.getItem('songs'));

function check_lives(){
  if(lives == 3){
    full_heart_1.style.display = 'block';
    full_heart_2.style.display = 'block';
    full_heart_3.style.display = 'block';
    empty_heart_1.style.display = 'none';
    empty_heart_2.style.display = 'none';
    empty_heart_3.style.display = 'none';
  }
  else if (lives == 2){
    full_heart_1.style.display = 'none';
    full_heart_2.style.display = 'block';
    full_heart_3.style.display = 'block';
    empty_heart_1.style.display = 'block';
    empty_heart_2.style.display = 'none';
    empty_heart_3.style.display = 'none';
  }
  else if (lives == 1){
    full_heart_1.style.display = 'none';
    full_heart_2.style.display = 'none';
    full_heart_3.style.display = 'block';
    empty_heart_1.style.display = 'block';
    empty_heart_2.style.display = 'block';
    empty_heart_3.style.display = 'none';
  }  
}


function asterisk(text){
  return text.substring(0, 2) + '_'.repeat(text.length-1);
}

function game(song,artist,extra,genre){
  songText.innerHTML = song.split(" ").map(asterisk).join(" ");
  artistText.innerHTML = artist.split(" ").map(asterisk).join(" ");
  extraText.innerHTML = extra;
  scoreText.innerHTML = `Score: ${score}`;
}

function main(){
  check_lives();
  var current_genre = window.localStorage.getItem('genre');
  var genre_listLength = song_list.all[current_genre].length;
  var current = song_list.all[current_genre][Math.floor(Math.random()*genre_listLength)];
  var current_song = current[0];
  var current_artist = current[1];
  var current_extra = current[2];
  console.log(song_list);
  console.log(current_song, current_artist, current_extra, genre_listLength);
  game(current_song,current_artist,current_extra,current_genre);
}
main();
