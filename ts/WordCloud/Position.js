var WordCloud;
(function (WordCloud) {
    var Position = (function () {
        function Position(x, y) {
            if (typeof x == 'undefined') {
                x = 0;
                y = 0;
            }
            if (x instanceof Position) {
                y = x.y;
                x = x.x;
            }
            this.x = x;
            this.y = y;
        }
        return Position;
    }());
    WordCloud.Position = Position;
})(WordCloud || (WordCloud = {}));
//# sourceMappingURL=Position.js.map