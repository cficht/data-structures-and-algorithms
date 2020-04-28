class AnimalShelter {
  constructor() {
    this.animals = [];
  }

  enqueue(animal) {
    if(animal.type === 'cat' || animal.type === 'dog') {
      this.animals.push(animal);
      return this.animals;
    } else {
      return 'Must be a cat or a dog';
    }
  }

  dequeue(pref) {
    if(pref !== 'cat' && pref !== 'dog' && pref) return null;
    if(!pref) return this.animals[0];
    let prefAnimal;
    this.animals.forEach((animal, i) => {
      if(pref === animal.type) {
        prefAnimal = animal;
        this.animals.splice(i, 1);
      }
    });
    return prefAnimal;
  }

}

module.exports = {
  AnimalShelter
};
