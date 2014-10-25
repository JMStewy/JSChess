Chess.Piece = function() {
};

Chess.Piece.prototype = {
    player : null instanceof Player,
    position : null instanceof Square,
    // legalMoves to be implemented by each subclass of Piece
    legalMoves : function (board) {
        throw new exception;
        return []; // array of squares
    }
};