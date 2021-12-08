export function renderGreeting(greeting) {
    const greetingEl = document.createElement('p');
    greetingEl.classList.add('greeting');
    greetingEl.textContent = greeting;
    return greetingEl;
}