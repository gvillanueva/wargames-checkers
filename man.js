/**
 * @file Defines the behavior of the Man in checkers
 * @author Giancarlo Villanueva
 */
var WargamesUnit = require("../wargames/unit.js");
var WargamesError = require("../wargames/error.js");

Man.prototype = Object.create(WargamesUnit.prototype);
Man.prototype.constructor = Man;

function Man(x,y,z,dir,image) {
    WargamesUnit.prototype.constructor.call(this,x,y,z,image);
    this.dir = dir;
}

/**
 *
 * @param x X-coordinate of unit's destination.
 * @param y Y-coordinate of unit's destination.
 * @param z Z-coordinate of unit's destination.
 */
Man.prototype.move = function(x,y,z) {
    console.log("Man.move()");
    if (x == this.x || y == this.y)
        throw new WargamesError("Invalid move: man must move diagonally");
    if ((this.y - y < 0) == (this.dir < 0))
        throw new WargamesError("Invalid move: wrong direction");

    WargamesUnit.prototype.move.call(this,x,y,z);
}

module.exports = Man;
