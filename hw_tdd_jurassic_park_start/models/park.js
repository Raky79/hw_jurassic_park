const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaursCollection = [];
}


Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaursCollection.push(dinosaur)
}

Park.prototype.removeDinosaur = function (dinosaur) {
    this.dinosaursCollection.pop(dinosaur)
}

module.exports = Park;