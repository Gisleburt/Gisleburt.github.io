var WordCloud;
(function (WordCloud) {
    var Position = (function () {
        function Position(x, y) {
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
/// <reference path="Position.ts" />
var WordCloud;
(function (WordCloud) {
    var RingPosition = (function () {
        function RingPosition() {
        }
        /**
         * How many pixels wide is the current ring
         * @param {int} ring
         * @returns {int}
         */
        RingPosition.diameterOfRing = function (ring) {
            if (ring < 0) {
                return 0;
            }
            return (ring * 2) + 1;
        };
        /**
         * Which ring does the current step reside in
         * @param {int} step
         * @returns {int}
         */
        RingPosition.whichRing = function (step) {
            var squareRoot = Math.floor(Math.sqrt(step));
            return Math.ceil(squareRoot / 2);
        };
        /**
         * Returns all steps needed to have gone through before arriving on the
         * current ring
         * @param {int} ring
         * @returns {int}
         */
        RingPosition.stepsInRingInclusive = function (ring) {
            var width = RingPosition.diameterOfRing(ring);
            return width * width;
        };
        /**
         * This works out what step along the ring we are, but does not tell you
         * if that step is on the ring in the first place.
         * @param {int} step
         * @param {int} ring
         * @returns {int}
         */
        RingPosition.stepOnRing = function (step, ring) {
            return step - RingPosition.stepsInRingInclusive(ring - 1);
        };
        RingPosition.prototype.positionOnRing = function (step) {
            var ring = RingPosition.whichRing(step);
            var diameter = RingPosition.diameterOfRing(ring);
            var currentStepOnRing = RingPosition.stepOnRing(step, ring);
            var position = new WordCloud.Position(this.initialPosition);
            position.x -= ring;
            position.y -= ring;
            // From top left corner, go around in a circle
            // 0 1 2 3 4    0 1 2 3 0
            // 6 0 1 2 5    3 0 1 0 1
            // 5 7 0 3 7    2 1 0 1 2
            // 4 6 5 4 8    1 0 1 0 3
            // 3 2 1 0 9    0 3 2 1 0
            // diameter = 5
            var smallDiameter = diameter - 1;
            var normaliseStep = smallDiameter == 0 ? 0 : currentStepOnRing % smallDiameter;
            // Left side
            if (currentStepOnRing >= 3 * smallDiameter) {
                position.y += smallDiameter - normaliseStep;
            }
            else if (currentStepOnRing >= 2 * smallDiameter) {
                position.x += smallDiameter - normaliseStep;
                position.y += smallDiameter;
            }
            else if (currentStepOnRing >= smallDiameter) {
                position.x += smallDiameter;
                position.y += normaliseStep;
            }
            else {
                position.x += normaliseStep;
            }
            return position;
        };
        RingPosition.prototype.construct = function (position) {
            this.initialPosition = position;
            this.step = 0;
        };
        RingPosition.prototype.nextPosition = function () {
            return this.positionOnRing(this.step++);
        };
        return RingPosition;
    }());
})(WordCloud || (WordCloud = {}));
