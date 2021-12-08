export function renderDog(dog) {
    const dogEl = document.createElement('p');

    dogEl.classList.add('dog');

    dogEl.textContent = `My dog ${dog.name} is ${dog.age} years old and their arch nemesis is a ${dog.nemesis.type} named ${dog.nemesis.name}.`;

    return dogEl;
}