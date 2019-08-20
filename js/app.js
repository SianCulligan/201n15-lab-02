/* eslint-disable no-cond-assign */
'use strict';

document.getElementById('testButton').addEventListener('click', myFunction);

function myFunction() {
  var userName = prompt('What\'s your name?');
  alert('Hi ' + userName + '. Work experience is great and all, but I want you to get to know me.');


  var dogName = prompt('Do you want to play a game? True or false: I named my small dog Stormageddon Dark Lord of All.');
  dogName = dogName.toUpperCase();
  if (dogName === 'TRUE') {
    alert('YES ' + userName + '. Clearly you\'ve learned that I\'m great at naming dogs. What\'s next?');
  } else {
    alert('Nope - Stormageddon Dark Lork of All really is his name. Clearly you\'ve learned that I\'m great at naming dogs. What\'s next?');
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
  if (diy === 'door' || diy === 'your door' || diy === 'front door') {
    alert('NAILED IT! Isn\'t DIY fun!? Next question.');
  } else {
    alert('How did you miss that? It\'s my door, my front door to be exact. I know, my neighbors love me. Next question.');
  }
  console.log('user\'s guess for which part of my house is jeweled: ' + diy);

  var teaCups = prompt('True or False: Sometimes people even trust me with valuable things; I know - be afraid, be very afraid. I take 40+ year old china and paint them with rude, silly, & fun sayings.');
  teaCups = teaCups.toUpperCase();
  if (teaCups === 'TRUE') {
    alert(userName + ', you really know your stuff! Last question for you, hope you\'ve been paying attention.');
  } else {
    alert(userName + ', not quite, it\'s actually called Calligraphy. Last question for you, hope you\'ve been paying attention.');
  }
  console.log('user\'s guess for name of fancy handwriting: ' + teaCups);

  var movieGenre = prompt('If you had to guess, what would you guess is my favorite movie genre? HINT: I\'ve referenced or quoted movies from this genre in every question.');
  movieGenre = movieGenre.toLowerCase();
  if (movieGenre === 'horror') {
    alert('Do you like scary movies?! Cause I sure do! Good work ' + userName);
  } else if (movieGenre === 'comedy') {
    alert('True, I do love a good laught, but I\'d much prefer zombies and creatures, horror movies are my jam.');
  } else if (movieGenre === 'romance') {
    alert('Gross. I\'d much prefer zombies and creatures, horror movies are my jam. Thanks for playing!');
  } else {
    alert('IT\'S ALIVE! Wait, are you alive? Because that\'s not right.');
  }
  console.log('user\'s guess for my favorite movie genre: ' + movieGenre);

  var favNumber = (prompt('Let\'s switch it up, take a guess at my favorite number:'));

  for (var i = 0; i < 4; i++) {
    if (parseInt(favNumber) === 11) {
      alert('Have we met? Because you obviously know me. Nice job, ' + userName); break;
    } else if (parseInt(favNumber) < 11) {
      favNumber = prompt('Not quite, try something a little higher than ' + favNumber);
    } else if (parseInt(favNumber) > 11) {
      favNumber = prompt('Not quite, try something a little lower than ' + favNumber) ;
    }
    alert('Not quite. the number I was looking for is 11.');
    console.log('user\'s guess for my favorite number: ' + favNumber);
  }

  var myArray = ['Maryland', 'Maine', 'Oklahoma', 'Virginia'];
  // var arrayAnswers = [
  //   'You\'re right! I haven\'t been to Maryland yet, I\'ll make it there someday. ',
  //   'You\'re right! I haven\'t been to Maine yet, I\'ll make it there someday. ',
  //   'You\'re right! I haven\'t been to Oklahoma yet, I\'ll make it there someday. ',
  //   'You\'re right! I haven\'t been to Virginia yet, I\'ll make it there someday. ',
  // ]; Counld not get this to work - will try again later

  var nonTravel = prompt('Ok, now you know a lot, but did you know that I have a goal to drive through all 50 states? There\'s only a few I haven\'t been to yet, can you guess which ones?');
  nonTravel = nonTravel.toLowerCase();

  for(var ii = 0; ii < 5; ii++) {
    myArray = myArray.toLowerCase();
    if (nonTravel === myArray[0] || nonTravel === myArray[1] || nonTravel === myArray[2] || nonTravel === myArray[3]){
      alert ('You\'re right! I haven\'t been there yet, but I\'m sure I\'ll make it there someday.'); break;
    } else {
      prompt('Been there! Try again!');
    }
  }
  alert('Only a couple to check off my list! I still need to make it out to ' + myArray[0] + ', ' + myArray[1] + ', ' + myArray[2] + ', & ' + myArray[3]);

}
