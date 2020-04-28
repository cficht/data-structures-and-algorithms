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

  it('must dequeue a cat or a dog', () => {
    const shelter = new AnimalShelter();
    const cat = {
      name: 'Whiskers',
      type: 'cat'
    };
    shelter.enqueue(cat);
    expect(shelter.dequeue('bird')).toEqual(null);
  });

  it('removes the first cat from the shelter', () => {
    const shelter = new AnimalShelter();
    const dog = {
      name: 'Fido',
      type: 'dog'
    };
    const cat = {
      name: 'Whiskers',
      type: 'cat'
    };
    const dog2 = {
      name: 'Fido',
      type: 'dog'
    };
    const cat2 = {
      name: 'Whiskers',
      type: 'cat'
    };
    shelter.enqueue(dog);
    shelter.enqueue(cat);
    shelter.enqueue(dog2);
    shelter.enqueue(cat2);
    expect(shelter.dequeue('dog')).toEqual(dog);
  });
  
  it('removes the first dog from the shelter', () => {
    const shelter = new AnimalShelter();
    const dog = {
      name: 'Fido',
      type: 'dog'
    };
    const cat = {
      name: 'Whiskers',
      type: 'cat'
    };
    const dog2 = {
      name: 'Fido',
      type: 'dog'
    };
    const cat2 = {
      name: 'Whiskers',
      type: 'cat'
    };
    shelter.enqueue(dog);
    shelter.enqueue(cat);
    shelter.enqueue(dog2);
    shelter.enqueue(cat2);
    expect(shelter.dequeue('cat')).toEqual(cat);
  });

  it('removes the first dog from the shelter', () => {
    const shelter = new AnimalShelter();
    const cat = {
      name: 'Otto',
      type: 'cat'
    };
    const cat2 = {
      name: 'Frankie',
      type: 'cat'
    };
    const cat3 = {
      name: 'Chainsaw',
      type: 'cat'
    };
    const dog = {
      name: 'Fido',
      type: 'dog'
    };
    shelter.enqueue(cat);
    shelter.enqueue(cat2);
    shelter.enqueue(cat3);
    shelter.enqueue(dog);
    expect(shelter.dequeue('dog')).toEqual(dog);
  });

});
