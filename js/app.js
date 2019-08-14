'use strict';

var userName=prompt('What\'s your name?');
alert('Hi ' + userName + '. Work experience is great and all, but I want you to get to know me.');

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
