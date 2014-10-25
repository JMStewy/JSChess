Chess.Game = function() {
    this.init();
};

Chess.Game.prototype = {
    init : function() {
        this.board = new Board();
    },
    currentPlayer : function() {},
    newGame : function(board) {

    }

};