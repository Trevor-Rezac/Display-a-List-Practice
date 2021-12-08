export function renderFriends(friendObj) {
    const friendEl = document.createElement('p');

    friendEl.classList.add('friend');

    friendEl.textContent = `My friend ${friendObj.name} is ${friendObj.age} years old and their favorite color is ${friendObj.favoriteColor}.`;
    return friendEl;
}