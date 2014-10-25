Chess.Board = function() {
    this.createSquares();
};

Chess.Board.prototype = {
    createSquares : function() {
        var order = new Render.Order();
        this.squares = {};
        for (var i = 0; i < order.rows.length; i++) {
            this.squares[order.columns[i]] = {};
            for (var j = 0; j < order.columns.length; j++) {
                var square = new Chess.Square;
                var file = order.columns[i];
                var rank = order.rows[j];
                square.file = file;
                square.rank = rank;
                square.name = '' + file + rank;
                this.squares[file][rank] = square;
            }
        }
    }
};