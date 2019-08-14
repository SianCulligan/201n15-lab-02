'use strict';

document.getElementById('testButton').addEventListener('click',myFunction);

function myFunction() {
  var userName=prompt('What\'s your name?');
  alert('Hi ' + userName + '. Work experience is great and all, but I want you to get to know me.');

  var dogName = prompt('Do you want to play a game? I initially tried to name my small dog \'Dogtor Who\', but got turned down. Instead I named him after a baby from Doctor Who in season 6 episode 12 - want to take a guess at his name?');
  dogName = dogName.toUpperCase();
  if (dogName === 'STORMAGEDDON'|| dogName === 'STORMAGEDDON DARK LORD OF ALL' ) {
    alert('YES ' + userName + '. Clearly you\'ve learned that I\'m great at naming dogs. What\'s next?');
  } else {
    alert('Nope - Stormageddon Dark Lork of All is his name. Clearly you\'ve learned that I\'m great at naming dogs. What\'s next?');
  }
  console.log('user\'s guess for my dog\'s name : ' + dogName);

  var zombieFlamingos = prompt('Take a stab at this - guess how many Zombie Flamingos I have in my front yard?');
  zombieFlamingos = zombieFlamingos.toLowerCase();
  if (zombieFlamingos === 2 || zombieFlamingos === 'two') {
    alert('You\'re so clever ' + userName + '. Let\'s try something a little more difficult.');
  } else {
    alert('So close. Correct answer is 2! But nevermind that, let\'s move on to the next one.');
  }
  console.log('user\'s guess for number of zombie flamingos: ' + zombieFlamingos);

  var diy = prompt('HERE\'S JOHNNY! Just kidding, my name\'s still Sian, but I did jewel a part of my house; hint: it\'s the same thing Johnny axe\'s down in that iconic scene - take a guess at what it is: ');
  diy = diy.toLowerCase();
  if (diy === 'door' || diy === 'your door'|| diy === 'front door') {
    alert('NAILED IT! Isn\'t DIY fun!? Next question.');
  } else {
    alert('How did you miss that? It\'s my door, my front door to be exact. I know, my neighbors love me. Next question.'); 
  }
  console.log('user\'s guess for which part of my house is jeweled: ' + diy);

  var teaCups = prompt('Sometimes people even trust me with valuable things, be afraid, be very afraid. I take 40+ year old china and paint them with rude, silly, & fun sayings in fancy handwriting. Guess what that fancy writing is called:');
  teaCups = teaCups.toUpperCase();
  if (teaCups === 'CALLIGRAPHY' ) {
    alert(userName + ', you really know your stuff! Last question for you, hope you\'ve been paying attention.');
  } else {
    alert(userName + ', not quite, it\'s actually called Calligraphy. Last question for you, hope you\'ve been paying attention.');
  }
  console.log('user\'s guess for name of fancy handwriting: ' + teaCups);

  var movieGenre = prompt('If you had to guess, what would you guess is my favorite movie genre? HINT: I\'ve quoted movies from this genre in every question.');
  movieGenre = movieGenre.toLowerCase();
  if (movieGenre === 'horror') {
    alert('Do you like scary movies?! Cause I sure do! Good work ' + userName + '. Thanks for getting to know me!');
  } else if (movieGenre === 'comedy') {
    alert('True, I do love a good laught, but I\'d much prefer zombies and creatures, horror movies are my jam. Thanks for playing!');
  } else if (movieGenre === 'romance') {
    alert('Gross. I\'d much prefer zombies and creatures, horror movies are my jam. Thanks for playing!');
  } else {
    alert('IT\'S ALIVE! Wait, are you alive? I noticed you didn\'t guess. Horror is my genre, and this is my page, enjoy!');
  }
  console.log('user\'s guess for my favorite genre: ' + movieGenre);

}
