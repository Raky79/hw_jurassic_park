const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    dinosaur1 = new Dinosaur ('T-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur ('Triceratops', 'hervibore', 80);
    dinosaur3 = new Dinosaur ('Brontosaurus', 'hervibore', 200);
    park = new Park('Jurassic Park', 40);
  })

  it('should have a name', function () {
    const name = park.name; 
    assert.strictEqual(name, 'Jurassic Park')
  });

  it('should have a ticket price', function () {
    const ticketPrice = park.ticketPrice;
    assert.strictEqual(ticketPrice, 40)
  });

  describe('dinosaursCollection', function (){

    it('should have a collection of dinosaurs', function () {
      const dinosaursCollection = park.dinosaursCollection;
      assert.deepStrictEqual(dinosaursCollection, []);
    })

    it('should be able to add a dinosaur to its collection', function() {
      park.addDinosaur('Velociraptor');
      const dinosaursCollection = park.dinosaursCollection;
      const dinosaurAdded = ['Velociraptor']; 
      assert.deepStrictEqual(dinosaursCollection, dinosaurAdded);
    });

    it('should be able to remove a dinosaur from its collection', function () {
      park.removeDinosaur('Velociraptor');
      const dinosaursCollection = park.dinosaursCollection; 
      const dinosaurRemoved = [];
      assert.deepStrictEqual(dinosaursCollection, dinosaurRemoved);
    });

  })


  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
