/**
 * @file Defines the extension points for checkers system
 * @author Giancarlo Villanueva
 */
var Man = require("./man");
var King = require("./king.js");

// Chessboard size constants
const GRID_SIZE = 2.25;
const GRID_ROWS = 8;
const GRID_COLS = 8;
const GRID_SCALE = 5;
const GRID_SIZE_SCALED = GRID_SIZE * GRID_SCALE;

module.exports = {
    /**
     *
     * @param users
     */
    preStart: function(users) {
    },

    /**
     * Sets up the units required for a game of checkers.
     * @returns {Object} Collection of  Unit-derived objects
     */
    setup: function() {
        var bounds = {};
        var units = {};

        // Set up light units
        for (var r = 0; r < 3; r++)
            for (var m = 0; m < 4; m++)
                units[4 * r + m] = new Man(m * 2 + r % 2, r, 0);

        // Set up dark units
        for (var r = 5; r < 8; r++)
            for (var m = 0; m < 4; m++)
                units[4 * r + m] = new Man(m * 2 + r % 2, r, 0);

        return {
            bounds: { x: 0, y: 0, w: GRID_SIZE_SCALED * GRID_COLS, h: GRID_SIZE_SCALED * GRID_ROWS },
            units: units
        };
    }
}
