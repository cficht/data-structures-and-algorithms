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

}

module.exports = {
  AnimalShelter
};
