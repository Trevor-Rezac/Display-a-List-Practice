// import functions and grab DOM elements
import { greetingArr } from './greetings.js';
import { renderGreeting } from './renderGreetings.js';
import { friendArr } from './friends.js';
import { renderFriends } from './renderFriends.js';
import { dogsArr } from './dogs.js';
import { renderDog } from './renderDogs.js';
import { heroesArr } from './heroes.js';
import { renderHero } from './renderHero.js';

const greetingListEl = document.querySelector('#greeting-list');
const friendListEl = document.querySelector('#friend-list');
const dogListEl = document.querySelector('#dog-list');
const heroListEl = document.querySelector('#hero-list');

for (let greeting of greetingArr) {
    const greetingEl = renderGreeting(greeting);
    greetingListEl.append(greetingEl);
}

for (let friendObj of friendArr) {
    const friendEl = renderFriends(friendObj);

    friendListEl.append(friendEl);
}

for (let dog of dogsArr) {
    const dogEl = renderDog(dog);

    dogListEl.append(dogEl);
}

for (let hero of heroesArr) {
    const heroEl = renderHero(hero);
    heroListEl.append(heroEl);
}