'use strict';

var userName=prompt('What\'s your name?');
alert('Hi ' + userName + '. Work experience is great and all, but I want you to get to know me.');

var dogName = prompt('Wanna play a game? I initially tried to name my small dog \'Dogtor Who\', but got turned down. Instead I named him after a baby from Doctor Who in season 6 episode 12 - want to take a guess at his name?')
dogName = dogName.toUpperCase();
if (dogName === 'STORMAGEDDON'|| dogName === 'STORMAGEDDON DARK LORD OF ALL' ) {
  alert('YES ' + userName + '. Clearly you\'ve learned that I\'m great at naming dogs. What\'s next?');
} else {
  alert('Nope - Stormageddon Dark Lork of All is his name. Clearly you\'ve learned that I\'m great at naming dogs. What\'s next?');
}

var zombieFlamingos = prompt('Take a stab at this - guess how many Zombie Flamingos I have in my front yard?');
zombieFlamingos = zombieFlamingos.toLowerCase();
if (zombieFlamingos === 2 || zombieFlamingos === 'two') {
  alert('You\'re so clever ' + userName + '. Let\'s try something a little more difficult.');
} else {
  alert('So close. Correct answer is 2! But nevermind that, let\'s move on to the next one.');
}


    // If you had to guess, what would you say is my favorite movie genre? HINT: I've given you hints in each question!
//var hobbies;
// var diy;
//var photo;
//var calligraphy;
//var movieType;

//document.quertSelector('#buttonTest').addEventListener('click', promptMe);

//function promptMe(){
  //
 // alert(hobbies)
//}
