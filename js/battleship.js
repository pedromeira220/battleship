createHTMLTable()


const view = {
    displayMessage: function(message) {
        document.getElementById("messageArea").innerHTML = message;
    },
    displayHit: function(location) {
        document.getElementById(location).setAttribute("class", "hit");
    },
    displayMiss: function(location) {
        document.getElementById(location).setAttribute("class", "miss");
    }
}

const model = {
    boardSize: 7,
    numberOfShips: 3,
    lengthOfAShip: 3,
    shipsSunk: 0,

    ships: [
        { locations: ["06", "16", "26"], hits: ["", "", ""] },
        { locations: ["24", "34", "44"], hits: ["", "", ""] },
        { locations: ["10", "11", "12"], hits: ["", "", ""] },
    ],

    fire: function(guess) {

        for (let i = 0; i < this.numberOfShips; i++) {
            const ship = this.ships[i];
            const index = ship.locations.indexOf(guess);
            if (index >= 0) { //The guess hit a ship
                ship.hits[index] = "hit";

                view.displayHit(parseInt(guess));
                view.displayMessage("HIT!");

                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }

            view.displayMiss(parseInt(guess));
            view.displayMessage("You missed!");

            return false;
        }
    },

    isSunk: function(ship) {
        for (let i = 0; i < this.numberOfShips; i++) {
            if (ship.hits[0] !== "hit") {
                return false;
            }
            return true;
        }
    }
};