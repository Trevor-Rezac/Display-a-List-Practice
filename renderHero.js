export function renderHero(hero) {
    const heroEl = document.createElement('div');
    const heroNameEl = document.createElement('p');
    const alterEgoEl = document.createElement('p');

    heroEl.classList.add('hero-div');
    heroNameEl.classList.add('hero');
    alterEgoEl.classList.add('alter-ego');

    heroNameEl.textContent = hero.name;
    alterEgoEl.textContent = `Alter Ego: ${hero.alterEgo}`;

    heroEl.append(heroNameEl, alterEgoEl);

    for (let phrase of hero.catchPhrase) {
        const catchPhraseEl = document.createElement('p');
        catchPhraseEl.classList.add('catchphrase');
        catchPhraseEl.textContent = `Catchphrase: "${phrase}"`;
        heroEl.append(catchPhraseEl);
    }
    return heroEl;
}