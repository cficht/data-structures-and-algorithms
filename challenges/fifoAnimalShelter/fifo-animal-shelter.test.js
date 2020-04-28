const { AnimalShelter } = require('./fifo-animal-shelter.js');

describe('testing fifo-animal-shelter.js', () => {

  it('can add a cat to a shelter', () => {
    const shelter = new AnimalShelter();
    const cat = {
      name: 'Whiskers',
      type: 'cat'
    };
    expect(shelter.enqueue(cat)).toEqual([cat]);
  });

  it('can add a dog to a shelter', () => {
    const shelter = new AnimalShelter();
    const dog = {
      name: 'Fido',
      type: 'dog'
    };
    expect(shelter.enqueue(dog)).toEqual([dog]);
  });

  it('can add both cats and dogs to a shelter', () => {
    const shelter = new AnimalShelter();
    const dog = {
      name: 'Fido',
      type: 'dog'
    };
    const cat = {
      name: 'Whiskers',
      type: 'cat'
    };
    shelter.enqueue(cat);
    expect(shelter.enqueue(dog)).toEqual([cat, dog]);
  });

  it('cannot add a bird to a shelter', () => {
    const shelter = new AnimalShelter();
    const bird = {
      name: 'Milo',
      type: 'bird'
    };
    expect(shelter.enqueue(bird)).toEqual('Must be a cat or a dog');
  });
  
});
